import React from 'react';
import "./style.scss";
import {Carousel, } from "react-bootstrap"
import 'swiper/css';

// import PropTypes from 'prop-types';

SlideShow.propTypes = {
    
};

const slides = [
    {
        id: 1,
        name:"Chuyện tình Udon",
        secondName:"Chuyện tình Udon",
        urlMovie: "https://247phim.com/xemphim/chuyen-tinh-udon-24012",
        uslImage: "https://static.247phim.com/165077/conversions/6291c7ec45f3c_nuhon1-1920_660.jpg",
    },
    {
        id: 2,
        name:"CHÀO MỪNG TỚI EDEN",
        secondName:"Chào mừng tới eden",
        urlMovie: "https://247phim.com/xemphim/chao-mung-toi-eden-24086",
        uslImage: "https://static.247phim.com/165032/conversions/628b3db7353ce_mami1-1920_660.jpg",
    },
    {
        id: 3,
        name:"QUY TẮC CỦA QUỶ",
        secondName:"Quy tắc của quỷ",
        urlMovie: "https://247phim.com/xemphim/quy-tac-cua-quy-co-24068",
        uslImage: "https://static.247phim.com/165087/conversions/62944ed9e571c_obi1-1920_660.jpg",
    },
    {
        id: 4,
        name:"MA CÀ RỒNG MORBIUS",
        secondName:"Ma cà rồng Mobius",
        urlMovie: "https://247phim.com/xemphim/ma-ca-rong-morbius-24091",
        uslImage: "https://static.247phim.com/165075/conversions/6291c36239e78_strangerthing41-1920_660.jpg",
    },
]
function SlideShow(props) {
    return (
        <Carousel>
            {
                slides.map(item => {
                    return <Carousel.Item key={item.id}>
                    <>
                    <img
                      className="d-block w-100"
                      src={item.uslImage}
                      alt={`slice ${item.id}`}
                    />
                        <div className="carousel-item-caption">
                            <h4>{item.name}</h4>
                            <h5>{item.secondName}</h5>
                        </div>                    
                    </>
                  </Carousel.Item>
                })
            }
  
  
        </Carousel>

    );
}

export default SlideShow;