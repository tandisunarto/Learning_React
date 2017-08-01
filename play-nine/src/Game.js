import React, { Component } from 'react';
import Star from './Star';
import GameButton from './GameButton';
import Answer from './Answer';
import Numbers from './Numbers';
import './App.css';


class Game extends Component {
    state = {
        selectedNumbers: [3, 7]
    };

    render() {
        return ( 
            <div>
                <h3>Play Nine</h3>
                <div className="App-intro">
                    <div className="row space-buttom">
                        <Star />
                        <GameButton />
                        <Answer selectedNumbers={this.state.selectedNumbers} />
                    </div>
                    <Numbers selectedNumbers={this.state.selectedNumbers} />
                </div>
            </div>
        );
    }
}

export default Game