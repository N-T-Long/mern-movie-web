import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie';
import publicApi from "../../../api/publicApi"
import "./style.scss"


MovieList.propTypes = {
    movieList: PropTypes.array,
    movieListTitle: PropTypes.string,
    country: PropTypes.string,
    year: PropTypes.number,
    genres: PropTypes.string,
    type_movie: PropTypes.string,
    
}

function MovieList(props) {

    // const [movies, setMovies] = useState([]);
    // useEffect(() => {
    //     const fetchMovies = async () =>{
    //         const movies = await publicApi.getMovies({
    //             country: props.country,
    //             year: props.year,
    //             genres: props.genres,
    //             type_movie: props.type_movie,

    //         })
    //     }
    // } )
    return (
        <div className='movie-list'>
             <div className="title-cate">
                <a >{props.movieListTitle}</a>
            </div>
            <div className="movies row">
                {
                    props.movieList && props.movieList.map((movie, index) =>{
                        return <Movie movie={movie} key={index}/>

                    } )
                }
            </div>
        </div>
    );
}

export default MovieList;