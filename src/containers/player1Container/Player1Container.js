import React, { useState } from 'react';
import axios from 'axios';
import VideoList from '../../components/videoList/VideoList';
import SearchBar from '../../components/searchBar/SearchBar';
import PlayList from '../../components/playList/PlayList';

import './player1Container.scss';

const Player1Container = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideos, setSelectedVideos] = useState([])

    const handleSubmit = async (searchTerm) => {
        const KEY = 'AIzaSyD_ytrpByILiH6EllcnW3bS1ujZBzQOIA8';
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 10,
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
            <h2 className='player__title'>Player 1</h2>
            <SearchBar handleFormSubmit={handleSubmit}/>
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos}/>
            <PlayList handleDeleteVideo={handleDeleteVideo} videos={selectedVideos} title='Player 1 Playlist' showAddButton="true"/>
        </div>
    )
}

export default Player1Container;