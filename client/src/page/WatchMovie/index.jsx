import React, {useState, useEffect, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import PlayerSection from "./components/PlayerSection"
import publicApi from '../../api/publicApi';
import CommentSection from './components/CommentSection';

WatchMovie.propTypes = {
    
};

function WatchMovie(props) {
    const [movie, setMovie] = useState({});
    const [isChange, setIsChange] = useState(false);
    console.log(isChange);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await publicApi.getMovie("629cf327ee4b34c758ceda7b", {});          
                    setMovie(response.movie);
                console.log("reRender");
        } catch (error) {
                console.log("Falsed to fetch movie list", error);
            }
        }
        
        fetchMovie();
    },[isChange])

    

    return (
        <div className="container">
            <PlayerSection movie={movie} setIsChange={async (change) => {
                setIsChange(change)
            }}/>
            <CommentSection/>
        </div>
    );
}

export default WatchMovie;