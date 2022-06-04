import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import "./style.scss";


index.propTypes = {
    
};

function index(props) {
    return (
       <div className="footer">
            <Container >
                <Row>
                    <Col className="col-lg-4 col-6" >
                        <p className="title">Phim lẻ</p>
                            <a className="footer-link" href="#/phim-le/hanh-dong" >Phim hành động</a>
                            <a className="footer-link" href="#/phim-le/kiem-hiep">Phim kiếm hiệp</a>
                            <a className="footer-link" href="#/phim-le/kinh-di">Phim kinh dị</a>
                            <a className="footer-link" href="#/phim-le/vien-tuong">Phim viễn Tưởng</a>
                            <a className="footer-link" href="#/phim-le/">Phim Hoạt hình</a>
                        
                    </Col>
                    <Col className="col-lg-4 col-6" >
                    <p className="title">Phim bộ</p>
                            <a className="footer-link" href="#/phim-le/">Phim siêu anh hùng</a>
                            <a className="footer-link" href="#/phim-le/">Phim tình cảm</a>
                            <a className="footer-link" href="#/phim-le/">Phim tài liệu</a>
                            <a className="footer-link" href="#/phim-le/">Phim hài</a>
                            <a className="footer-link" href="#/phim-le/">Phim thảm họa</a>
                        
                    </Col>
                    <Col className="col-lg-4 col-6" >
                    <p className="title">TV Show</p>
                            <a className="footer-link" href="/phim-bo/">Phim bộ Hàn Quốc</a>
                            <a className="footer-link" href="/phim-bo/">Phim bộ Trung Quốc</a>
                            <a className="footer-link" href="/phim-bo/">Phim bộ Mỹ</a>
                            <a className="footer-link" href="/phim-bo/">Phim bộ Việt Nam</a>
                            <a className="footer-link" href="/phim-bo/">Phim bộ Hồng Kông</a>
                        
                    </Col>
                </Row>  
            </Container>
       </div>

    );
}

export default index;