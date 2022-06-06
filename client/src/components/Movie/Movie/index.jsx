import React from "react";
import ReactDOM from "react-dom"
import {Link} from "react-router-dom"
import PropTypes from "prop-types";
import "./style.scss";
import { propTypes } from "react-bootstrap/esm/Image";
Movie.propTypes = {
  movie : PropTypes.object
  
};


function change_view(views) {
  let result = 0;
  let shortView = "";
  if (views >= 1000000){
    result = views/1000000;
    result =  result.toFixed(1);
    shortView = result.toString() + "M"
  } else{
    result = views/1000;
    result =  result.toFixed(1);
    shortView = result.toString() + "K"
  }
  
  return shortView
}


function Movie(props) {

  return (
    <div className="movie col-lg-3 col-md-4 col-sm-4 col-6">
      <Link className="movie-url" to={`xem-phim/${props.movie.name_URL}`}>
        <div className="img-4-6">
          <div className="inline">
            <img src={props.movie.URL_image} alt={props.movie.other_name}/>
            <i className="bi bi-play-circle"></i>
          </div>          
          <span className="movie-episode">full</span>
        </div>
        <h3 className="movie-name">{props.movie.name}</h3>
        <p className="movie-other_name">{props.movie.other_name}</p>
        <div className="func row">
          <div className="col-6 views">
            <i className="bi bi-eye-fill"/>
            <a>{change_view(props.movie.view)}</a>
          </div>
          <div className="col-6 rate">
          
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>

          </div>
        </div>
      </Link> 








      
      {/* <a href="https://247phim.com/xemphim/cong-to-vien-chuyen-sinh-23918">
        <div className="movie-img">
          <img src={props.URL_image} alt={props.other_name}/>
          <i class="bi bi-play-circle"></i>
          <span className="movive-episode">{props.episode}</span>
        </div>
        <h3 className="movie-name">{props.name}</h3>
        <p className="movie-other_name">{props.other_name}</p>
        <div className="movie-review">
            <div className="movie-views">
                <i class="bi bi-eye-fill"></i>
                <p className="count-views">{props.views}</p>
            </div>
            <div className="movie-rate">
              icon start * rate
            </div>
            
        </div>
      </a> */}



{/* 
        <a className="movie-url" href="https://247phim.com/xemphim/cong-to-vien-chuyen-sinh-23918">
          <div className="movie-img">
            <img src={movie_example.URL_image} alt={movie_example.other_name}/>
            <i className="bi bi-play-circle"></i>
            <span className="movive-episode">{movie_example.episode}</span>
          </div>
          <h3 className="movie-name">{movie_example.name}</h3>
          <p className="movie-other_name">{movie_example.other_name}</p>
          <div className="movie-review row">
              <div className="movie-review-views col-md-6">
                  <i className="bi bi-eye-fill"></i>
                  <p className="count-views">{change_view(movie_example.views)}</p>
              </div>
              <div className="movie-review-rate col-md-6">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>

              </div>
              
          </div>
        </a> */}





      </div>
  );
}

export default Movie;
