import React from 'react';
import './videoPlayer.scss';


const VideoPlayer = ({video}) => {
    return (
        <div className="video__container">
            <iframe src={'https://www.youtube.com/embed/' + video} width="420" height="300" title="current play"></iframe>
    </div >
    )
}

export default VideoPlayer;