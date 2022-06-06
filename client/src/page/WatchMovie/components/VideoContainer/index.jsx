import React from 'react';
import PropTypes from 'prop-types';

VideoContainer.propTypes = {
    isShow: PropTypes.bool
};

function VideoContainer(props) {
    const className = `video-container ${
        (props.isShow) ? 'show' : 'hiden'
    }`
    return (
        <div className={className}>
                <video src="http://localhost:4000/videos/video_first_1654451759061.mp4" width="100%" className='video' controls={true}></video>
        </div>
    );
}

export default VideoContainer;