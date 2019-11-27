import React from 'react';
import './videoPlayer.scss';


const VideoPlayer = () => {
    return (
        <div className="video__container">
            <iframe src="https://www.youtube.com/embed/4fHw4GeW3EU" width="420" height="300" title="current play"></iframe>
    </div >
    )
}

export default VideoPlayer;