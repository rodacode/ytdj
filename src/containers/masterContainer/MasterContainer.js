import React from 'react';
import './masterContainer.scss';
import VideoPlayer from '../../components/videoPlayer/VideoPlayer';
import MasterPlayList from '../../components/masterPlayList/MasterPlayList';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const MasterContainer = () => {
    const selectedVideos = useSelector(state => state.selectedVideos)
    const playingVideo = useSelector(state => state.playingVideo)

    const dispatch = useDispatch();

    const handleDeleteVideo = (video) => {
        console.log(video)
        dispatch({ type: 'REMOVE_VIDEO', payload: video })

    }
    return (
        <div className='master__container'>
        <VideoPlayer video={playingVideo}/>
        <MasterPlayList handleDeleteVideo={handleDeleteVideo} videos={selectedVideos} title='Main Playlist' />
        </div>
    )
}

export default MasterContainer;