import React from 'react';
import { useDispatch } from "react-redux";
import './playListItem.scss';

const PlayListItem = ({ video, handleDeleteVideo, showAddButton }) => {
    const dispatch = useDispatch();
    const addToMainPLaylist = e => dispatch({ type: 'ADD_VIDEO', payload: e })

    return (
        <div className='playlist__item__container'>
            <div className='playlist__item__image__container'>
                <img src={video.snippet.thumbnails.default.url} alt='item searched' />
            </div>
            <div className='playlist__item__title'>
                <p><span>{video.snippet.title}</span></p>
            </div>
            <div className='playlist__item__buttons'>
                { showAddButton ? <i onClick={() => addToMainPLaylist(video)} className="fas fa-plus"></i> : null }
                
                <i onClick={() => handleDeleteVideo(video)} className="fas fa-trash"></i>
            </div>
        </div>
    )
};
export default PlayListItem;