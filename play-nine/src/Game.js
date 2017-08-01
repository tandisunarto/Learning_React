import React, { Component } from 'react';
import Star from './Star';
import GameButton from './GameButton';
import Answer from './Answer';
import Numbers from './Numbers';
import './App.css';


class Game extends Component {
    render() {
        return ( 
            <div>
                <h3>Play Nine</h3>
                <div className="App-intro">
                    <div className="row space-buttom">
                        <Star />
                        <GameButton />
                        <Answer />
                    </div>
                    <Numbers />
                </div>
            </div>
        );
    }
}

export default Game