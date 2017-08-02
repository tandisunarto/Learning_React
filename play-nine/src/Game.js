import React, { Component } from 'react';
import Star from './Star';
import GameButton from './GameButton';
import Answer from './Answer';
import Numbers from './Numbers';
import './App.css';


class Game extends Component {
    state = {
        selectedNumbers: [],
        numberOfStars: 1 + Math.floor(Math.random() * 9)
    };

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.filter(
                (number) => number !== clickedNumber
            )
        }))
    }

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
            return;
        } 
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }))
    };

    render() {
        const { selectedNumbers, numberOfStars } = this.state;

        return ( 
            <div>
                <h3>Play Nine</h3>
                <div className="App-intro">
                    <div className="row space-buttom">
                        <Star numberOfStars={numberOfStars} />
                        <GameButton selectedNumbers={selectedNumbers} />
                        <Answer selectedNumbers={selectedNumbers}
                                unselectNumber={this.unselectNumber} />
                    </div>
                    <Numbers selectedNumbers={selectedNumbers}
                            selectNumber={this.selectNumber} />
                </div>
            </div>
        );
    }
}

export default Game