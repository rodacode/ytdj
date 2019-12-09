import React from 'react';
import { useDispatch } from "react-redux";
import './masterPlayListItem.scss';

const MasterPlayListItem = ({ video, handleDeleteVideo}) => {
    const dispatch = useDispatch();
    const playVideo = e => dispatch({ type: 'PLAY_VIDEO', payload: e })

    return (
        <div className='playlist__item__container'>
            <div className='playlist__item__image__container'>
                <img src={video.snippet.thumbnails.default.url} alt='item searched' />
            </div>
            <div className='playlist__item__title'>
                <p><span>{video.snippet.title}</span></p>
            </div>
            <div className='playlist__item__buttons'>
                <i onClick={() => playVideo(video.id.videoId)} className="fas fa-play"></i>
                <i onClick={() => handleDeleteVideo(video)} className="fas fa-trash"></i>
            </div>
        </div>
    )
};
export default MasterPlayListItem;