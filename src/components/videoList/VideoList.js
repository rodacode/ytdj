import React from 'react';
import VideoItem from '../videoItem/VideoItem';

const VideoList = (props) => {
    const renderedVideos =  props.videos.map((video) => {
        return <VideoItem key={video.id} video={video}/>
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;