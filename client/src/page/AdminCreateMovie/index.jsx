import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from 'react';
import { Button, Col, Form, FormControl, InputGroup, Modal, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import Select from 'react-select';
import * as yup from "yup";
import "./style.scss";
import adminApi from "../../api/adminApi";
import axios from "axios"


const schema = yup.object({
    name: yup.string().required("Bạn phải nhập thông tin này!"),
    other_name: yup.string().required("Bạn phải nhập thông tin này!"),
    name_URL: yup.string().required("Bạn phải nhập thông tin này!"),
    // year: yup.number("Phải nhập số").required("Bạn phải nhập thông tin này!"),
    // duration: yup.string().required("Bạn phải nhập thông tin này!"),
    // director: yup.string().required("Bạn phải nhập thông tin này!"),
    // country: yup.string().required("Bạn phải nhập thông tin này!"),
    // type_movie: yup.string().required("Bạn phải nhập thông tin này!"),
    // casts: yup.string().required("Bạn phải nhập thông tin này!"),
    genres: yup.array().required("Bạn phải nhập thông tin này!"),
    // language: yup.string().required("Bạn phải nhập thông tin này!"),
    // episodes: yup.string().required("Bạn phải nhập thông tin này!"),
    // URL_image: yup.string().required("Bạn phải nhập thông tin này!"),

  }).required();

function AdminCreateMovie(props) {
    const [validated, setValidated] = useState(false);
    const [genresOptions, setGenresOptions] = useState([]);
    const [modalImageShow, setModalImageShow] = useState(false);
    const [modalVideoShow, setModalVideoShow] = useState(false);
    const [image, setImage] = useState(undefined);
    const [imageName, setImageName] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [video, setVideo] = useState(undefined);
    const [videoName, setVideoName] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const navigate = useNavigate();
    const countries = useSelector( state => state.public.countries);
    const genres = useSelector( state => state.public.genres);
    const { register, handleSubmit, formState: { errors } , control} = useForm({
    resolver: yupResolver(schema)
  });


    
    useEffect(() => {
        const newGenresOption =[];
        for (let i = 0; i< genres?.length; i++){
            newGenresOption.push({value : genres[i]._id, label: genres[i].name});
        }
        setGenresOptions(newGenresOption);
    }, [genres])
    
    const handleShowModalImportImage = () =>{
        setModalImageShow(true)
    }
    const handleHideModalImportImage = () =>{
        setModalImageShow(false)
    }
    const handleShowModalImportVideo = () =>{
        setModalVideoShow(true)
    }

    const handleHideModalImportVideo = () =>{
        setModalVideoShow(false)
    }

    const justValue = (genres) => {
        const newGenres = [];
        genres.map( (item) => newGenres.push(item.value));
        return newGenres;
    } 
  const handleCreate = async (data) => {
    data.genres = justValue(data.genres)
    const nameEpisode = (data.type_movie === "phimle" ) ? "Full" : "Tập 1"
    const movie = {
        
        "name" : data.name,
        "other_name" : data.other_name,
        "name_URL": data.name_URL,
        "type_movie": data.type_movie,
        "year" : parseInt(data.year),
        "country": data.country,
        "duration" : parseInt(data.duration),
        "description" : data.description,
        "genres" : data.genres,
        "language" : data.language,
        "episodes" : [{ "name": nameEpisode, "URL_episode": data.episodes}],
        "URL_image": data.URL_image
    }
    console.log(movie);
    const res = await adminApi.addNewMovie(movie);
    console.log(res.success);
    (res.success) ? navigate("/admin/danh-sach-phim") : 
    
        alert("Phim vừa tạo đã tồn tại!!!")

    
  };

  const handleUploadImage = (e) => {
    const imageFormData = new FormData();
    imageFormData.append("name", imageName);
    imageFormData.append("image",image);

    axios({
        url: "http://localhost:4000/images/upload",
        method: "POST",
        data: imageFormData
    }).then((res) => setImageUrl(res.data))
    setModalImageShow(false)
  };

  const handleUploadVideo = (e) => {
    const videoFormData = new FormData();
    videoFormData.append("name", videoName);
    videoFormData.append("video",video);
    console.log(video);
    axios({
        url: "http://localhost:4000/videos/upload",
        method: "POST",
        data: videoFormData
    }).then((res) => setVideoUrl(res.data))
    setModalVideoShow(false)

  };

    return (
        <div className="container">
            <div className="create-movie">
                {console.log("rerender")}
                <h1 className="create-movie-title">Thêm Phim mới</h1>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">

                        <Form.Group  as={Col} md="4">
                            <Form.Label>Tên phim</Form.Label>
                            <Form.Control
                                {...register('name')}
                                type="text"
                                placeholder="Tên phim"
                            />
                            {errors.name && <p className="error-message">{errors.name.message}</p>}
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                            <Form.Label>Tên khác</Form.Label>
                            <Form.Control
                                {...register('other_name')}
                                type="text"
                                placeholder="Tên khác"
                            />
                            {errors.other_name && <p className="error-message">{errors.other_name.message}</p>}
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Tên video URL </Form.Label>
                            <Form.Control
                                {...register('name_URL')}
                                type="text"
                                placeholder="URL"
                            />
                            {errors.name_URL && <p className="error-message">{errors.name_URL.message}</p>}
                        </Form.Group>
                    </Row>



                    <Row className="mb-3">          
                        <Form.Group as={Col} md="2" controlId="validationCustom01">
                            <Form.Label>Năm sản xuất</Form.Label>
                            <Form.Control
                                {...register('year')}
                                type="text"
                                placeholder="Năm"
                            />
                            {errors.year && <p className="error-message">{errors.year.message}</p>}
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom02">
                            <Form.Label>Thời lượng</Form.Label>
                            <Form.Control
                                {...register('duration')}
                                type="text"
                                placeholder="Phút"
                            />
                            {errors.duration && <p className="error-message">{errors.duration.message}</p>}
                        </Form.Group>


                        <Form.Group as={Col} md="2" controlId="validationCustom03">
                            <Form.Label>Đạo diễn</Form.Label>
                            <Form.Control  
                                {...register('director')} 
                                type="text" 
                                placeholder="Đạo diễn"
                            />
                            {errors.director && <p className="error-message">{errors.director.message}</p>}
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Danh sách diễn viên </Form.Label>
                            <Form.Control
                            {...register('casts')}
                                type="text"
                                placeholder="Danh sách diễn viên"
                            />
                            {errors.casts && <p className="error-message">{errors.casts.message}</p>}
                            </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="2" controlId="validationCustom05">
                            <Form.Label>Loại phim</Form.Label>
                            <Form.Select  {...register('type_movie')} >
                                <option value="phimle">Phim lẻ</option>
                                <option value="phimbo">Phim bộ</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} md="2" controlId="validationCustom04">
                            <Form.Label>Quốc gia</Form.Label>
                            <Form.Select  {...register('country')}>
                                {countries?.map((country, index) => <option value={country._id} key={index}>{country.name}</option>)}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Thể loại</Form.Label>
                            <Controller 
                                control={control}
                                name="genres"
                                render={({field , value }) => 
                                    <Select  
                                        {...field} 

                                        closeMenuOnSelect={false}
                                        defaultValue={[]}
                                        isMulti
                                        options={genresOptions}    
                                        
                                    />
                                }
                            />
                            {errors.genres && <p className="error-message">{errors.genres.message}</p>}
                        </Form.Group>


                        <Form.Group as={Col} md="2" controlId="validationCustom03">
                            <Form.Label>Ngôn ngữ</Form.Label>
                            <Form.Control
                            {...register('language')}
                            type="text"
                            placeholder="Ngôn ngữ"
                            />
                            {errors.language && <p className="error-message">{errors.language.message}</p>}
                        </Form.Group>
                    </Row>


                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" >
                        <Form.Label>URL hành ảnh</Form.Label>
                        <InputGroup >
                            {/* <Button  id="button-addon2" onClick={handleShowModalImportImage}>
                                Thêm ảnh
                            </Button> */}
                            {/* <InputGroup.Text onClick={handleShowModalImportImage} >Thêm ảnh</InputGroup.Text> */}
                            <Form.Control
                            
                            {...register('URL_image')}
                            value={imageUrl }
                            onClick={handleShowModalImportImage}
                            type="text"
                            placeholder="URL hình ảnh"
                            />
                        </InputGroup>
                        {errors.URL_image && <p className="error-message">{errors.URL_image.message}</p>}
                        </Form.Group>

                        <Form.Group as={Col} md="6" >
                            <Form.Label>URL video</Form.Label>
                            <InputGroup >
                                <Form.Control
                                    {...register('episodes')}
                                    type="text"
                                    placeholder="URL video"
                                    onClick={handleShowModalImportVideo}
                                    value={videoUrl}
                                />
                            </InputGroup>
                            {errors.episodes && <p className="error-message">{errors.episodes.message}</p>}
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} md="12" c>
                            <Form.Label>Mô tả</Form.Label>
                                <Form.Control
                                {...register('description')}
                                as="textarea" rows={3}
                                type="text"
                                />
                                {errors.description && <p className="error-message">{errors.description.message}</p>}
                            </Form.Group>
                    </Row>

                    <Button type="submit" style={{marginTop: "10px"}}
                        onClick={handleSubmit(handleCreate)}
                    >Tạo phim</Button>
                </Form>
                
                
                {/* modal import image */}
                <Modal show={modalImageShow} onHide={handleHideModalImportImage}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm hình ảnh</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Control 
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                            <Form.Label>Tên file</Form.Label>
                            <Form.Control type="text" onChange={(e) => setImageName(e.target.value)}/>
                        
                            <Button type="button" onClick={handleUploadImage }>Thêm</Button>
                        </Form>
                    </Modal.Body>

                </Modal>

                {/* modal import video */}
                <Modal show={modalVideoShow} onHide={handleHideModalImportVideo}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm video</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Control 
                                type="file"
                                onChange={(e) => setVideo(e.target.files[0])}
                            />
                            <Form.Label>Tên file</Form.Label>
                            <Form.Control type="text" onChange={(e) => setVideoName(e.target.value)}/>
                        
                            <Button type="button" onClick={handleUploadVideo }>Thêm</Button>
                        </Form>
                    </Modal.Body>
                    
                </Modal>

            </div>
        </div>
    );
}

export default AdminCreateMovie;