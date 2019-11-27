import React, { useState } from 'react';
import axios from 'axios';
import VideoList from '../../components/videoList/VideoList';
import SearchBar from '../../components/searchBar/SearchBar';
import PlayList from '../../components/playList/PlayList';
import './player2Container.scss';

const Player2Container = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideos, setSelectedVideos] = useState([])

    const handleSubmit = async (searchTerm) => {
        console.log('caca')
        const KEY = 'AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I';
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: KEY,
                q: searchTerm
            }
        })
        console.log(response.data.items)
        setVideos(response.data.items)
    };
    const handleVideoSelect = (video) => {
        setSelectedVideos([...selectedVideos,video])
    }
    const handleDeleteVideo = (video) => {
        setSelectedVideos(selectedVideos.filter((v) => v.etag !== video.etag))
        console.log(selectedVideos)
    }
    return (
        <div className='player__container'>
            <h2 className='player__title'>Player 2</h2>
            <SearchBar handleFormSubmit={handleSubmit}/>
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos}/>
            <PlayList handleDeleteVideo={handleDeleteVideo} videos={selectedVideos} title='Player 1 Playlist' showAddButton="true"/>
        </div>
    )
}

export default Player2Container;