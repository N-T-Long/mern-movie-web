import React ,{useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import VideoContainer from "../VideoContainer";
import publicApi from "../../../../api/publicApi"
import {Link, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { movieActions } from '../../../../redux-toolkit/slice/movie';
import userApi from '../../../../api/userApi';
import { publicActions } from '../../../../redux-toolkit/slice/public';
import { authActions } from '../../../../redux-toolkit/slice/auth';

PlayerSection.propTypes = {

};


function change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.replace(/ /g,"-");
    str = str.trim();

    return str;
}

function PlayerSection(props) {
    const [typeLike, setTypeLike] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const infomationMovie = useSelector(state => state.movie.infoMovieSelected);
    const currentEpisode = useSelector(state => state.movie.currentEpisode);
    const countries = useSelector(state => state.public.countries)
    const genres = useSelector(state => state.public.genres);
    const isLoggedIn  = useSelector(state => state.auth.isLoggedIn)
    const movieID = useSelector(state => state.movie._id)
    const currentUser = useSelector(state => state.auth.currentUser)
    const [listGenres, setListGenres] = useState("");

    const handlePlay = () => { 
        if (!currentEpisode) {
            dispatch(movieActions.updateView(infomationMovie._id));
            dispatch(movieActions.updateCurentEpisodeSuccess(infomationMovie.episodes[0]));
            window.scrollTo(0, 0);
        }                                        
    }    
    
    useEffect(() => {
        if (currentUser && movieID) {
            let newTypeLike = true;
            currentUser.like_movies.map((movie) => {
                if (movie === movieID)
                    newTypeLike = false;
            })
            setTypeLike(newTypeLike)
        }
    }, [movieID, currentUser])

    const handleLikeMovie =async () => {
        if (isLoggedIn)
        {   
            await userApi.updateNewLikeMovie({"type_like": typeLike, "movieID": movieID})
            dispatch( authActions.reloadData())
            dispatch( movieActions.reloadData(movieID))
        }
        if (!isLoggedIn) {
            alert("Bạn chưa đăng nhập. Vui lòng đăng nhập trước");
            navigate("/dang-nhap")
        }
    }

    const handleChangeEpisode = (e) => {
        infomationMovie.episodes.map((episode) => {
            if (episode.name === e.target.innerText) {
                dispatch(movieActions.updateView(infomationMovie._id));
                dispatch(movieActions.updateCurentEpisodeSuccess(episode));
                window.scrollTo(0, 0);
            }
        })
        
    }


    const section = infomationMovie ?
   (
       
         <div className="player-section">
             {console.log("rerender")}
            <div className="container">
                <VideoContainer  />
                <div className="movie-detail row mt-3">
                    <div className=" movie-detail-left col-md-4 col-12 ">
                        <img className="movie-image" src={infomationMovie.URL_image} alt={infomationMovie.name} />
                    </div>
                    <div className="col-md-8 col-12 movie-detail-right">
                        <div className="movie-detail-info">
                            <h2 className="movie-name">{infomationMovie.name}</h2>
                            <h4 className="movie-other_name">{infomationMovie.other_name} ({infomationMovie.year})</h4>
                            <div className="detail-info-popular row">

                                <div className="detail-info-view col-md-2 col-6">
                                    <i className='bi bi-eye-fill'></i>
                                    <span>{infomationMovie.views}</span>
                                </div>
                                <div className="detail-info-view col-md-2 col-6">
                                    <i className='bi bi-hand-thumbs-up-fill'></i>
                                    <span>{infomationMovie.likes}</span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 col-md-3">
                                <button className="bth-play" onClick={handlePlay}>
                                <i className="bi bi-play-fill"></i>
                                    PLAY
                                </button>
                            </div>
                        </div>

                        <div className="movie-des">
                            <p>{infomationMovie.description}</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <ul className="more-info">
                                    <li><span>Thời lượng:</span> {infomationMovie.duration} phút</li>
                                    <li><span>Đạo diễn:</span> {infomationMovie.director}</li>
                                    <li><span>Quốc gia:</span> {
                                        countries?.map(
                                            (country) => 
                                            (country._id === infomationMovie.country) ? country.name : "" 
                                        )
                                        }
                                    </li>
                                    <li><span>Thể loại:</span> 
                                    {infomationMovie.genres.map((item) => `${item.name}, `)}
                                    </li>
                                    <li><span>Năm phát hành:</span> {infomationMovie.year}</li>
                                    <li><span>Diễn viên:</span> {infomationMovie.casts}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="liking-movie">
                            <button onClick={handleLikeMovie}>{(typeLike)? "Like" : "Unlike"}</button>
                        </div>
                    </div>
                </div>
                <div className="episode-section">
                    <div className="episode-section-title">
                        <h3>Tập phim</h3>
                    </div>
                    <ul className="list-movie-episodes">
                        {infomationMovie.episodes?.map((item, index) => (
                            <li className={"movie-episode "  } key={index} ><Link onClick={handleChangeEpisode}  to={`/xem-phim/${infomationMovie.name_URL}/` + change_alias(item.name)}> {item.name}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    ) 
    :
   (<></>)
    
   return section
}

export default PlayerSection;