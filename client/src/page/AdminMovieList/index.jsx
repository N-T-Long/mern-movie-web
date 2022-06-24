import React from 'react';
import axios from "axios"
import { useEffect, useState } from 'react';
import {Button, Modal,Form } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import {adminActions} from "../../redux-toolkit/slice/admin"
import { Controller, useForm } from "react-hook-form";
import MUIDataTable from "mui-datatables";
import adminApi from '../../api/adminApi';
import "./style.scss"


function MovieList(props) {
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const [video, setVideo ] = useState(undefined);
    const [videoUrl, setVideoUrl ] = useState("");
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [idMovieAddEpisode, setIdMovieAddEpisode] = useState("");
    const [showModalAddEpisode, setShowModalAddEpisode] = useState(false);
    const movieList = useSelector(state => state.admin.movielist);
    const genres = useSelector(state => state.public.genres);
    const countries = useSelector(state => state.public.countries);
    const { register, handleSubmit, reset, formState: { errors } , control} = useForm()

    useEffect( () => {
        fetchAllMovie()
    },[] )




    const columns = [

        "Tên phim", 
        "Tên khác", 
        "Loại phim", 
        "Lượt xem", 
        "Lượt thích",
        "Ngày tạo",
        {
            name: "Name",
            options: {
              filter: false,
              customBodyRender: (value, tableMeta, updateValue) => (
                < >
                    <Button variant="warning" className="button-edit" > Chỉnh sửa phim</Button>
                    <Button  onClick={() =>{handleRemoveMovie(value)}} variant="danger" className="button-edit">Xóa phim</Button>
                    {
                        (value.type_movie === "phimbo") 
                        ? 
                        <Button 
                            onClick={() => {
                                setShowModalAddEpisode(true)
                                setIdMovieAddEpisode(value._id)
                            }} 
                            variant="success" 
                            className="button-edit"
                        >Thêm tập mới</Button>  
                        :
                        <></>}
                </>
              )
            }
          },
        ];

    const options = {
        selectableRows: "none",

        download: false,
        print: false

    };

    const fetchAllMovie = async () => {
        const res = await adminApi.getAllMovies();

        let newData = [];
        res.movies.map((movie) => newData.push([
            movie.name, movie.other_name, movie.type_movie,movie.views, movie.likes ,movie.create_at,movie
        ])
        )
        setData(newData);
    }


    const handleRemoveMovie = async (movie) => {
        if (window.confirm(`Bạn chắc chắn muốn xóa phim: ${movie.name}`) == true) {
            const res = await adminApi.removeMovie(movie._id)
            if (res.success === true)
                fetchAllMovie()
        }
    }



    const handleHideModalAddEpisode = () =>{
        setShowModalAddEpisode(false)
    }

    const handleCreateVideoUrl = () => {
        const videoFormData = new FormData();
        videoFormData.append("video",video);
        axios({
            url: "http://localhost:4000/videos/upload",
            method: "POST",
            data: videoFormData
        }).then((res) => {
            setVideoUrl(res.data)
        })
    }

    const handleAddEpisode = async (data) => {
        const res = await adminApi.addNewEpisode(idMovieAddEpisode, {"URL_episode": videoUrl, "name" : data.name});
        console.log(res)
        if (res.success) {
            handleHideModalAddEpisode()
            setVideoUrl("");
            setIdMovieAddEpisode(undefined)
            reset()

        }
    }

    return (
        <div className="" >
 
          <MUIDataTable
            title={"Danh sách phim"}
            data={data}
            columns={columns}
            options={options}
            />


            {/* modal import video */}
            <Modal show={showModalAddEpisode} onHide={handleHideModalAddEpisode}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm Tập phim mới</Modal.Title>
                </Modal.Header>
                 <Modal.Body>
                    <Form>
                        <Form.Control 
                            type="file"
                            accept="video/mp4, video/MPEG-4, video/webm"
                             onChange={(e) => setVideo(e.target.files[0])}
                        />
                        <Button type="button" 
                            variant="info"
                            size="sm"
                            style={{ margin: "10px 0"}}
                            onClick={handleCreateVideoUrl }
                        >Tạo đường link video</Button>
                        <Form.Control type="text" 
                            id="url-new-episode"
                            placeholder="Đường link video"
                            {...register("URL_episode")}
                            value = {videoUrl}

                        />
                        <Form.Label>Tên tập phim</Form.Label>
                        <Form.Control type="text" 
                            {...register("name")}
                            placeholder="Tên tập phim"
                        />
                    
                        <Button type="button" 
                            variant="success"
                            size = "lg"
                            style ={{float: "right", margin: "20px 10px"}}
                            onClick={handleSubmit(handleAddEpisode) }
                        >Thêm tập mới</Button>
                    </Form>
                </Modal.Body> 
            </Modal>
        </div>

    );
}

export default MovieList;