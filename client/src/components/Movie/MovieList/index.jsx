import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie';
import "./style.scss"
import { PageItem } from 'react-bootstrap';

MovieList.propTypes = {
    movieList: PropTypes.array,
    movieListTitle: PropTypes.string,
};



function MovieList(props) {

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