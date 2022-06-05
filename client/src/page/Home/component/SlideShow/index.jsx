import React, {useState, useEffect} from 'react';
import "./style.scss";
import {Carousel, } from "react-bootstrap"
import 'swiper/css';
import publicApi from "../../../../api/publicApi"

// import PropTypes from 'prop-types';

SlideShow.propTypes = {
    
};

function SlideShow(props) {
    const [slides, setSlides] = useState([]);
    // list slide
    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await publicApi.getSlides();
                setSlides(response.slides);

            } catch (error) {
                console.log("Falsed to fetch movie list", error);
            }
        }
        
        fetchSlides();
    },[])
    return (
        <Carousel>
            {
                slides.map((item, index) => {
                    return <Carousel.Item key={index}>
                    <a href={item.URL_Movie}>
                    <img
                      className="d-block w-100"
                      src={item.URL_image}
                      alt={`slice ${index}`}
                    />
                        <div className="carousel-item-caption">
                            <h4>{item.other_name}</h4>
                            <h5>{item.name}</h5>
                        </div>                    
                    </a>
                  </Carousel.Item>
                })
            }
  
  
        </Carousel>

    );
}

export default SlideShow;