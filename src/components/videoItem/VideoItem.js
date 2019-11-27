import React from 'react';
import './videoItem.scss';

const VideoItem = ({ video, handleVideoSelect }) => {
    return (
        <div onClick={() => handleVideoSelect(video)} className='item__container'>
            <div className='item__image__container'>
                <img src={video.snippet.thumbnails.default.url} alt='item searched' />
            </div>
            <div className='item__title'>
               <p>{video.snippet.title}</p>
            </div>
        </div>
    )
};
export default VideoItem;