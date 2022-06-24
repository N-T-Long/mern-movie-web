import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import "./style.scss"

//Componets import 
import SlideShow from "./component/SlideShow"
import MovieList from "../../components/Movie/MovieList"
import { Col, Container, Row } from 'react-bootstrap';
import HotPanel from './component/HotPanel';
import headPhimBo from "../../access/img/head_phim_bo_hot.png"
import publicApi from '../../api/publicApi';



Home.propTypes = {
    
};

function Home(props) {

    return (
        <>
            <SlideShow/>
            <div className="main-content" 
            // style={{paddingTop :"500px"}}
            >
                <Container >
                     <MovieList query={{"_page" : "1", "_limit" : "6", "genres" : "629c74ca1fe09d0c71de1098"}} movieListTitle="Không thể bỏ lỡ"/>
                     <MovieList query={{"_page" : "1", "_limit" : "6", "genres" : "629c74d91fe09d0c71de109c"}}  movieListTitle="Phim chiếu rạp"/>
                     <MovieList query={{"_page" : "1", "_limit" : "6", "genres" : "629c74e01fe09d0c71de109e"}}  movieListTitle="Phim Mới"/>
                     <MovieList query={{"_page" : "1", "_limit" : "6", "type_movie" : "phimle"}} movieListTitle="Phim lẻ"/>
                     <MovieList query={{"_page" : "1", "_limit" : "6", "type_movie" : "phimbo"}} movieListTitle="Phim bộ"/>
                     <MovieList query={{"_page" : "1", "_limit" : "6", "genres" : "629c74ec1fe09d0c71de10a2"}}  movieListTitle="Phim siêu anh hùng"/>
                     <MovieList query={{"_page" : "1", "_limit" : "6", "genres" : "629c74f61fe09d0c71de10a6"}}  movieListTitle="Phim hoạt hình"/>
                     <MovieList query={{"_page" : "1", "_limit" : "6", "genres" : "629c75191fe09d0c71de10a8"}}  movieListTitle="Phim kinh dị"/>
                </Container>
            </div>
        </>
    );
}

export default Home;