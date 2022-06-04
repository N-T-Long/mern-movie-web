import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

Movie.propTypes = {
    link: PropTypes.string,
    urlImage: PropTypes.string,
    episode: PropTypes.object,
    secondName: PropTypes.string
};

function Movie(props) {
    return (
        <div className='item col-lg-3 col-md-4 col-sm-4 col-6'>
            <Link to= {`/xemphim/${props.link}}`}>
                <div className='img-4-6'>
                    <img src={props.urlImage} alt={props.secondName} />
                </div>
                <span className='ribbon'>{props.episode}</span>
            </Link>
        </div>
    );
}

export default Movie;