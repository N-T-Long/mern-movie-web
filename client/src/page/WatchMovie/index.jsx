import React, {useState, useEffect, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import PlayerSection from "./components/PlayerSection"
import publicApi from '../../api/publicApi';
import CommentSection from './components/CommentSection';
import {useSelector} from "react-redux"
import {useLocation} from "react-router-dom"

import MovieList from "../../components/Movie/MovieList"
WatchMovie.propTypes = {
    
};

function WatchMovie(props) {
    const [movie, setMovie] = useState({});
    const [isChange, setIsChange] = useState(false);
    const [movies, setMovies] = useState([]);
    const movieID = useSelector(state => state.movie.movieID)
    const location = useLocation();
    const movieURL = location.pathname.split("/")[2];

    useEffect(() => {

        const fetchMovie = async () => {
            try {
                const response = await publicApi.getMovie(movieID, {});          
                    setMovie(response.movie);
            } catch (error) {
                console.log("Falsed to fetch movie list", error);
            }
        }

        const fetchMovieByURL = async () => {
            try {
                const response = await publicApi.getMovieByURL(movieURL, {});      
                    setMovie(response.movie);
                    console.log(response.movie);
            } catch (error) {
                console.log("Falsed to fetch movie list", error);
            }
        }
        
        (movieID) ?  fetchMovie() : fetchMovieByURL();

    },[isChange])

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
            <PlayerSection movie={(movie)} setIsChange={async (change) => {
                setIsChange(change)
            }}/>

            <div className="nominations row">
                <div className="container">

                <MovieList movieList={movies} movieListTitle="Phim lẻ"/>
                </div>
            </div>
            <CommentSection/>
        </>
    );
}

export default WatchMovie;