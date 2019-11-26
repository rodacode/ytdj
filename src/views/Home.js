import React, { useState } from 'react';
import axios from 'axios';
import './home.scss';
import VideoList from '../components/videoList/VideoList';
import SearchBar from '../components/searchBar/SearchBar';

const Home = () => {
    const [videos, setVideos] = useState([]);

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

    return (
        <div className='main__container'>
            <SearchBar handleFormSubmit={handleSubmit}/>
            <VideoList videos={videos}/>
        </div>
    )
}

export default Home