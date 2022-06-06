import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import VideoContainer from "../VideoContainer";
import publicApi from "../../../../api/publicApi"

PlayerSection.propTypes = {
    movie: PropTypes.object,
    setIsChange: PropTypes.func
};

function PlayerSection(props) {
    const [isShow, setIsShow] = useState(false)
    
    const updateMovieViews = async () => {
        try {
            console.log(props.movie._id);
            await publicApi.updateViews(props.movie._id, {})
            console.log("Update views success");
            props.setIsChange(true);
        } catch (error) {
            console.log("Falsed to update", error);
        }
    }
        
    console.log(props.movie.views);

    const handleLike = () =>{

    }
    return (
        <div className="player-section">
            <VideoContainer isShow={isShow}/>
            <div className="movie-detail row mt-3">
                <div className=" movie-detail-left col-md-4 col-12 ">
                    <img className="movie-image" src={props.movie.URL_image} alt={props.movie.name} />
                </div>
                <div className="col-md-8 col-12 movie-detail-right">
                    <div className="movie-detail-info">
                        <h2 className="movie-name">{props.movie.name}</h2>
                        <h4 className="movie-other_name">{props.movie.other_name} ({props.movie.year})</h4>
                        <div className="detail-info-popular row">
                            <div className="detail-info-like col-md-2 col-6">
                                <i className='bi bi-hand-thumbs-up-fill'></i>
                                <span>{props.movie.likes}</span>
                            </div>
                            <div className="detail-info-view col-md-2 col-6">
                                <i className='bi bi-eye-fill'></i>
                                <span>{props.movie.views}</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6 col-md-3">
                            <button className="bth-play" onClick={() => {
                                if (!isShow)  { 
                                    updateMovieViews();
                                   
                                } ;
                                setIsShow(true)
                                }}>
                            <i className="bi bi-play-fill"></i>
                                PLAY
                            </button>
                        </div>
                    </div>

                     <div className="movie-des">
                         <p>{props.movie.description}</p>
                     </div>
                     <div className="row">
                         <div className="col-md-6 col-12">
                             <ul className="more-info">
                                 <li><span>Thời lượng:</span> {props.movie.duration}</li>
                                 <li><span>Đạo diễn:</span> {props.movie.director}</li>
                                 <li><span>Quốc gia:</span> {props.movie.country}</li>
                                 <li><span>Thể loại:</span> {props.movie.genres}</li>
                                 <li><span>Phát hành:</span> {props.movie.year}</li>
                                 <li><span>Diễn viên:</span> {props.movie.casts}</li>
                                 <li><span>Đánh giá:</span> {props.movie.rate}</li>
                             </ul>
                         </div>
                     </div>
                     <div className="rating-movie">
                         <h4>Đánh giá: </h4>
                         <i className="bi bi-star-fill "></i>
                         <i className="bi bi-star-fill "></i>
                         <i className="bi bi-star-fill "></i>
                         <i className="bi bi-star-fill "></i>
                         <i className="bi bi-star-fill "></i>
                         <i className="bi bi-star-fill "></i>
                         <i className="bi bi-star-fill "></i>
                         <i className="bi bi-star-fill "></i>
                         <i className="bi bi-star-fill "></i>
                         <i className="bi bi-star-fill "></i>
                     </div>
                    <div className="liking-movie">
                        <button>like</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerSection;