import React from 'react';
import './home.scss';
import Player1Container from '../containers/player1Container/Player1Container';
import Player2Container from '../containers/player2Container/Player2Container';
import MasterContainer from '../containers/masterContainer/MasterContainer';

const Home = () => {
    return (
        <div className='home__container'>
            <h1 className='title'>YOUTUBE DJ</h1>
            <div className='game__container'>
                <Player1Container />
                <MasterContainer/>
                <Player2Container />
            </div>
        </div>
    )
}

export default Home