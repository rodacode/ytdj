import React from 'react';
import VideoItem from '../videoItem/VideoItem';
import './videoList.scss';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video, index) => {
        return <VideoItem key={index} video={video} handleVideoSelect={handleVideoSelect}/>
    });

    return <div className='videoList'>{renderedVideos}</div>;
};
export default VideoList;