import React from 'react';
import {Link } from  "react-router-dom"
import ListMovies from '../../components/ListMovies';
//import PropTypes from 'prop-types';
import "./style.scss";


// index.propTypes = {
    
// };

function index(props) {
    return (
        <>
        <h1 style={{marginTop: "100px"}}>404. Không tìm thấy đường dẫn này</h1>
        <h2>Bạn có thể truy cập vào  
            <Link to="/" style={{
                color: "#ffbb00",
                marginLeft: "10px"
            }}>Trang chủ</Link>
        </h2>
        
        </>

    );
    
}

export default index;