import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import { Link, useLocation } from 'react-router-dom';
Sidebar.propTypes = {
    

};

function Sidebar(props) {
  
    const location = useLocation().pathname.split("/")[2];
    console.log(location);

    return (

        <div className='sidebar'>
            <h1 className="header">
                Admin page
            </h1>
            <div className='list-category'>
                <Link to="/admin/trang-chu">
                
                    <div className={`category ${(location === "trang-chu") ? "active" : ""}`}>
                        <div className="category-icon">
                            <i className="bi bi-house-door" ></i>
                        </div>
                        <div className="category-name">
                            <p >Dashboard</p>
                        </div>
                    </div>
                </Link>
                <Link to="/admin/danh-sach-phim">
                    <div className={`category ${(location === "danh-sach-phim") ? "active" : ""}`}>
                        <div className="category-icon">
                            <i className="bi bi-collection-play-fill" ></i>
                        </div>
                        <div className={"category-name" }>
                            <p >Danh sách phim</p>
                        </div>
                    </div>
                </Link>
                <Link to="/admin/tao-phim">
                
                    <div className={`category ${(location === "tao-phim") ? "active" : ""}`}>
                        <div className="category-icon">
                            <i className="bi bi-film" ></i>
                        </div>
                        <div className={"category-name" }>
                            <p >Thêm phim mới</p>
                        </div>
                    </div>
                </Link>
                <Link to="/admin/tao-slide">
                    <div className={`category ${(location === "tao-slide") ? "active" : ""}`}>
                        <div className="category-icon">
                            <i className="bi bi-plus-circle" ></i>
                        </div>
                        <div className={"category-name" }>
                            <p >Thêm slide mới</p>
                        </div>
                    </div>
                </Link>
 
            </div>
        </div>
    );
}

export default Sidebar;