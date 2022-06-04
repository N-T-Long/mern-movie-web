import React from 'react';
import PropTypes from 'prop-types';
import MovieList from "../../../../components/Movie/MovieList";
import "./style.scss";

HotPanel.propTypes = {
    
};

function HotPanel(props) {
    return (
        <div className='hot-panel'>
            <div className="scroll-wapper" >
                <MovieList/>
            </div>
        </div>
    );
}

export default HotPanel;