import React from 'react';
import './masterContainer.scss';
import VideoPlayer from '../../components/videoPlayer/VideoPlayer';
import PlayList from '../../components/playList/PlayList';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const MasterContainer = () => {
    const videos = useSelector(state => state.selectedVideos)
    const dispatch = useDispatch();

    const handleDeleteVideo = (video) => dispatch({ type: 'REMOVE_VIDEO', payload: video })
    return (
        <div className='master__container'>
                <VideoPlayer/>
                <PlayList handleDeleteVideo={handleDeleteVideo} videos={videos} title='Main Playlist'/>
        </div>
    )
}

export default MasterContainer;