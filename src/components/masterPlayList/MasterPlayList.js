import React from 'react';
import MasterPlayListItem from '../masterPlayListItem/MasterPlayListItem';
import './masterPlayList.scss';

const MasterPlayList = ({ videos, title, handleDeleteVideo }) => {
    const renderedList = videos.map((video, index) => {
        return <MasterPlayListItem handleDeleteVideo={handleDeleteVideo} key={index} video={video} />
    });

    return (
        <div>
            <div className='masterPlayList'>
                <div className='playlist__title'>{title}</div>
                <div>{renderedList}</div>
            </div>
        </div>
    )
};
export default MasterPlayList;