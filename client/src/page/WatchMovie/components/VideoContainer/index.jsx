import React from 'react';
import { useSelector } from 'react-redux';



function VideoContainer(props) {
    const episode = useSelector(state => state.movie.currentEpisode)
    
    const className = `video-container ${
        (episode) ? 'show' : 'hiden'
    }`
    return (
        <div className={className}>
                <video src={episode? episode.URL_episode : ""} width="100%" className='video' controls={true}></video>
        </div>
    );
}

export default VideoContainer;