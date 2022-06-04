import React from 'react';
import ListMovies from '../../components/ListMovies';
//import PropTypes from 'prop-types';
import "./style.scss";


// index.propTypes = {
    
// };

function index(props) {
    return (
        <video src="http://localhost:4000" id="videoPlayer" width="1000px" controls muted="muted" autoplay>

        </video>

    );
    
}

export default index;