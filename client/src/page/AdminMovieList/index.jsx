import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Table } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { adminActions } from "../../redux-toolkit/slice/admin"

function MovieList(props) {
    const dispatch = useDispatch()
    const movieList = useSelector(state => state.admin.movielist);
    const genres = useSelector(state => state.public.genres);
    const [show, setShow] = useState(false);
    useEffect(() => {
        dispatch(adminActions.fetchMovieList());
    }, [])

    const handleDeleteMovie = (e) => {

        console.log(e);

    }

    const handleUpdateMovie = () => {

    }

    const handleAddNewEpisode = () => {


    }
    return (
        <Table striped responsive="lg" bordered hover variant="dark">
            <thead>
                <tr fixed>

                    <th>STT</th>
                    <th>ID</th>
                    <th>Tên phim</th>
                    <th>Tên khác</th>
                    <th>Tên phim URL</th>
                    <th>Thời lượng</th>
                    <th>Quốc gia</th>
                    <th>Ngôn ngữ</th>
                    <th>Đạo diễn</th>
                    <th>Năm</th>
                    <th>Loại Phim</th>
                    <th>Thể loại</th>
                    <th>Lượt  xem</th>
                    <th style={{ minWidth: "300px" }}>Mô tả</th>
                    <th>Ngày tạo</th>
                    <th style={{ minWidth: "150px" }}>Chỉnh sửa</th>
                </tr>
            </thead>
            <tbody>
                {
                    movieList?.map((movie, index) =>
                        <tr key={index}>

                            <td>{index}</td>
                            <td>{movie._id}</td>
                            <td>{movie.name}</td>
                            <td>{movie.other_name}</td>
                            <td>{movie.name_URL}</td>
                            <td>{movie.duration}</td>
                            <td>{movie.language}</td>
                            <td>{movie.country}</td>
                            <td>{movie.director}</td>
                            <td>{movie.year}</td>
                            <td>{(movie.type_movie === "phimle") ? "Phim lẻ" : "Phim bộ"}</td>
                            <td>
                                <table>
                                    {movie.genres?.map((item, index) =>
                                        //  <tr key={index}>

                                        genres?.map((genre) => {
                                            if (genre._id === item)
                                                return `${genre.name} ,`
                                        })

                                        // </tr>
                                    )}
                                </table>

                            </td>
                            <td>{movie.views}</td>
                            <td>{movie.description}</td>
                            <td>{(movie.create_at)}</td>
                            <td>
                                {
                                    <>

                                        {(movie.type_movie === "phimbo") ? <Button onClick={handleAddNewEpisode} variant="info">Thêm tập mới</Button> : <></>}
                                        <Button as="button" onCLick={handleUpdateMovie} style={{ margin: "20px 0 20px 0" }} variant="warning">Chỉnh sửa</Button>
                                        <Button as="button" onCLick={handleDeleteMovie} variant="danger">Xóa</Button>
                                    </>
                                }

                            </td>

                        </tr>

                    )
                }

            </tbody>
        </Table>
    );
}

export default MovieList;