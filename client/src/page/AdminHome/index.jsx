import React from 'react';
import PropTypes from 'prop-types';
import { Link, Navigate } from 'react-router-dom';
import { Row, Col, Card, Table } from 'react-bootstrap';
import "./style.scss";
import adminApi from "../../api/adminApi";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminActions } from "../../redux-toolkit/slice/admin"

AdminHome.propTypes = {

};

function AdminHome(props) {
    const dispatch = useDispatch()
    const movieList = useSelector(state => state.admin.movielist);
    const genres = useSelector(state => state.public.genres);
    const navigate = useNavigate();
    let viewsTotal = 0;
    let likeTotal = 0
    let moviesCount = 0;

    movieList?.map((movies, index) => {
        viewsTotal = viewsTotal + movies.views;
        likeTotal = likeTotal + movies.likes;
        moviesCount = moviesCount + 1;
        console.log(movies.likes)
    })

    useEffect(() => {
        dispatch(adminActions.fetchMovieList());
    }, [])
    // Sort Movie < by View
    const byViews = movieList?.slice(-4);
    byViews?.sort(function (a, b) {
        return b.views - a.views;
    });
    // Sort Movie < by Like
    const byLikes = movieList?.slice(-4);
    byLikes?.sort(function (a, b) {
        return b.likes - a.likes;
    });

    return (
        <>
            <div className="container">
                <div className="dashboard">
                    <h1 className="title">Thông tin</h1>
                    <Row>
                        <Col md={6} xl={4}>
                            <Card>
                                <Card.Body className='infor-card'>
                                    <h6 className="mb-4">Lượng Views</h6>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-9">
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                                <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />{viewsTotal}
                                            </h3>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={4}>
                            <Card>
                                <Card.Body className='infor-card'>
                                    <h6 className="mb-4">Lượng Like</h6>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-9">
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                                <i className="feather icon-arrow-down text-c-red f-30 m-r-5" /> {likeTotal}
                                            </h3>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={4}>
                            <Card>
                                <Card.Body className='infor-card'>
                                    <h6 className="mb-4">Số lượng phim</h6>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-9">
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                                <i className="feather icon-arrow-up text-c-green f-30 m-r-5" /> {moviesCount}
                                            </h3>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <h1 className="title">Top lượt xem</h1>
                    <div>
                        <Table striped responsive="lg" bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên phim</th>
                                    <th>Thời Lượng</th>
                                    <th>Quốc Gia</th>
                                    <th>Lượt Xem</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    byViews?.map((movie, index) =>
                                        <tr key={index} onClick={() => navigate(`/xem-phim/${movie.name_URL}`)}>
                                            <td>{index}</td>
                                            <td>{movie.name}</td>
                                            <td>{movie.duration} phút</td>
                                            <td>{movie.country.name}</td>
                                            <td>{movie.views}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                    <h1 className="title">Top lượt Thích</h1>
                    <div>
                        <Table striped responsive="lg" bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên phim</th>
                                    <th>Thời Lượng</th>
                                    <th>Quốc Gia</th>
                                    <th>Lượt Thích</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    byLikes?.map((movie, index) =>
                                        <tr key={index} onClick={() => navigate(`/xem-phim/${props.movie.name_URL}`)} >
                                            <td>{index}</td>
                                            <td>{movie.name}</td>
                                            <td>{movie.duration} phút</td>
                                            <td>{movie.country}</td>
                                            <td>{movie.likes}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminHome;