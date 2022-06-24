import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Movie from "../../../components/Movie/Movie"
import userApi from "../../../api/userApi"
import "./style.scss"
LikedMovie.propTypes = {
    
};

function LikedMovie(props) {
    const [listMovie, setListMovie] = useState([]);
    useEffect(() => {
        const fetchListLikedMovie = async () => {
            const  res = await userApi.getListLikedMovie();
            setListMovie(res.like_movies);
        }
        fetchListLikedMovie();
    }, [])
    return (
        <div className="container">
            <p className="page-title">Phim yêu thích</p>
            <div className="movies row">
                {
                    listMovie && listMovie.map((movie, index) =>{
                        return <Movie movie={movie} key={index}/>

                    } )
                }
            </div>
        </div>
    );
}

export default LikedMovie;