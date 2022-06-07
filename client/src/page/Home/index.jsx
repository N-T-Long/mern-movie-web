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
    const [movies, setMovies] = useState([]);
  
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await publicApi.getMovies();
                setMovies(response.movies)
            } catch (error) {
                console.log("Falsed to fetch movie list", error);
            }
        }
        
        fetchMovies();
    },[])



    return (
        <>
            <SlideShow/>
            <div className="main-content" 
            // style={{paddingTop :"500px"}}
            >
                <Container >
                    <Row>
                        <Col  sm={8} >
                            <MovieList movieList={movies} movieListTitle="Phim lẻ"/>
                        </Col>
                        <div className="col-sm-4 col-12 mt-2">
                            <div className="hot-panel-header">
                                <img src={headPhimBo} alt="" style={{width: "100%"}} />                                    
                            </div>
                            <HotPanel/>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Home;