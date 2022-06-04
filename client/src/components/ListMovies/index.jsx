import React from 'react';
import PropTypes from 'prop-types';
import Movie from "./component/Movie";

ListMovies.propTypes = {
    
};

function ListMovies(props) {
    return (
        <div>
            <Movie/>
        </div>
    );
}

export default ListMovies;