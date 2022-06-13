import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch } from "react-redux"
import {useLocation} from "react-router-dom"
import publicApi from '../../api/publicApi';
import PlayerSection from "./components/PlayerSection"
import CommentSection from './components/CommentSection';
import { movieActions } from '../../redux-toolkit/slice/movie';

import MovieList from "../../components/Movie/MovieList"

function WatchMovie(props) {
    const dispatch = useDispatch();
    const [isChange, setIsChange] = useState(false);
    const [movies, setMovies] = useState([]);
    const location = useLocation();


    
    useEffect(() => {
        // update current movie 
        const movieURL = location.pathname.split("/")[2];
        dispatch(movieActions.isSelecting(movieURL))
    },[]) 


    return (
        <div style={{color: "#e5e5e5"}}>  

            <PlayerSection />


            <div className="nominations row">
                <div className="container">

                <MovieList movieList={movies} movieListTitle="Phim lẻ"/>
                <MovieList movieList={movies} movieListTitle="Phim lẻ"/>
                </div>
            </div>
            <CommentSection/>
        </div>
    );
}

export default WatchMovie;