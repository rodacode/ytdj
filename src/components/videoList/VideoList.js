import React from 'react';
import VideoItem from '../videoItem/VideoItem';

const VideoList = (props) => {
/*
    const handleSubmit = async () => {
        const response = await youtube.get('/search', {
            params: {
                q: 'volatil'
            }
        })
        setVideos(response.data.items)
    };
    */
    const renderedVideos =  props.videos.map((video) => {
        return <VideoItem key={video.id} video={video}/>
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;