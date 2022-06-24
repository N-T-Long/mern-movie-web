import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie';
import publicApi from "../../../api/publicApi"
import "./style.scss"
import { propTypes } from 'react-bootstrap/esm/Image';
import { boolean } from 'yup/lib/locale';


function MovieList(props) {

    const [listMovie, setListMovie] = useState([]);
    useEffect(() => {
        const fetchMovies = async () =>{
            if (props.query){
            const res = await publicApi.getMovies(props.query)
            setListMovie(res) 
        }
        }

        fetchMovies();
    }, [props.query] )
    if (props.query)
        return (
            <div className='movie-list'>
                <div className="title-cate">
                    <a >{props.movieListTitle}</a>
                </div>
                {( props.isPageSearch && listMovie.pagination)  ? (

                    <div className="title-cate">
                        <p>{listMovie.pagination?.total_docs} phim được tìm thấy</p>
                    </div>
                )
                : 
                (<></>)
                }
                <div className="movies row">
                    {
                        listMovie.movies && listMovie.movies.map((movie, index) =>{
                            return <Movie movie={movie} key={index}/>

                        } )
                    }
                </div>
            </div>
        );

    if (props.listMovie)
    return (
        <div className='movie-list'>
            <div className="title-cate">
                <a >{props.movieListTitle}</a>
            </div>
            {( props.isPageSearch && props.listMovie.pagination)  ? (

                <div className="title-cate">
                    <p>{props.listMovie.pagination?.total_docs} phim được tìm thấy</p>
                </div>
            )
            : 
            (<></>)
            }
            <div className="movies row">
                {

                    props.listMovie?.movies?.map((movie, index) =>{
                        return <Movie movie={movie} key={index}/>

                    } )
                }
            </div>
        </div>
    );
}

export default MovieList;