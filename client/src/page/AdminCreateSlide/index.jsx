import React from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from 'react';
import { Button, Col, Form, FormControl, InputGroup, Modal, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import Select from 'react-select';
import * as yup from "yup";
import adminApi from "../../api/adminApi";
import axios from "axios"

const schema = yup.object({
    name: yup.string().required("Bạn phải nhập thông tin này!"),
    other_name: yup.string().required("Bạn phải nhập thông tin này!"),
    URL_image: yup.string().required("Bạn phải nhập thông tin này!"),
    
}).required();

function AdminCreateSlide(props) {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [modalImageShow, setModalImageShow] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [image, setImage] = useState(undefined);
    const [imageName, setImageName] = useState("");

    const { register, handleSubmit,reset, formState: { errors } , control} = useForm({
    resolver: yupResolver(schema)
    });
    
    const handleShowModalImportImage = () =>{
        setModalImageShow(true)
    }
    const handleHideModalImportImage = () =>{
        setModalImageShow(false)
    }
    
    const handleCreate = async (data) => {
        const res = await adminApi.addNewSlide(data);

        if (res.success)  {
            alert("Tạo thành công !!!");
            reset()
            setImageUrl("")
        } else alert("Đã xảy ra lỗi !!!")
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
    
    return (
        <div className="container">
        <div className="create-movie">
            <h1 className="create-movie-title">Thêm slide mới</h1>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">

                    <Form.Group  as={Col} md="6">
                        <Form.Label>Tên phim</Form.Label>
                        <Form.Control
                            {...register('name')}
                            type="text"
                            placeholder="Tên phim"
                        />
                        {errors.name && <p className="error-message">{errors.name.message}</p>}
                    </Form.Group>

                    <Form.Group as={Col} md="6">
                        <Form.Label>Tên khác</Form.Label>
                        <Form.Control
                            {...register('other_name')}
                            type="text"
                            placeholder="Tên khác"
                        />
                        {errors.other_name && <p className="error-message">{errors.other_name.message}</p>}
                    </Form.Group>

                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" >
                    <Form.Label>URL hành ảnh</Form.Label>
                    <InputGroup >
                        <Form.Control
                        
                        {...register('URL_image')}
                        value={imageUrl}
                        onClick={handleShowModalImportImage}
                        type="text"
                        placeholder="URL hình ảnh"
                        />
                    </InputGroup>
                    {errors.URL_image && <p className="error-message">{errors.URL_image.message}</p>}
                    </Form.Group>

                    <Form.Group as={Col} md="6" >
                        <Form.Label>URL phim </Form.Label>
                        <Form.Control
                        {...register('URL_movie')}
                            type="text"
                            placeholder="Đường dẫn của phim"
                        />
                        {errors.casts && <p className="error-message">{errors.casts.message}</p>}
                    </Form.Group>
                </Row>

                <Button 
                    type="submit" 
                    variant="warning"
                    size="lg"
                    style={{marginTop: "10px"}}
                    onClick={handleSubmit(handleCreate)}
                >Tạo slide</Button>
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
                            accept="image/png, image/jpg, image/jpeg"

                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        <Form.Label>Tên file</Form.Label>
                        <Form.Control type="text" onChange={(e) => setImageName(e.target.value)}/>
                    
                        <Button 
                            variant="warning"
                            style={{margin: "10px 0"}}
                            onClick={handleUploadImage}
                        >
                            Thêm
                        </Button>
                    </Form>
                </Modal.Body>

            </Modal>



        </div>
    </div>
    );
    }
export default AdminCreateSlide;




