import React from 'react';
import {Link } from  "react-router-dom"
//import PropTypes from 'prop-types';
import "./style.scss";

// index.propTypes = {
    
// };

function index(props) {
    return (
        <div style={{paddingTop: "200px", paddingLeft: "200px"}}>
            <h1 >404. Không tìm thấy đường dẫn này</h1>
            <h2>Bạn có thể truy cập vào  
                <Link to="/" style={{
                    color: "#ffbb00",
                    marginLeft: "10px"
                }}>Trang chủ</Link>
            </h2>
            


        </div>
        
    );
    
}

export default index;


