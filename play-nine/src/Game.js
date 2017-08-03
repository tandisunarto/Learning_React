import React, { Component } from 'react';
import Star from './Star';
import GameButton from './GameButton';
import Answer from './Answer';
import Numbers from './Numbers';
import './App.css';


class Game extends Component {
    state = {
        selectedNumbers: [],
        numberOfStars: 1 + Math.floor(Math.random() * 9),
        answerIsCorrect: null,
        usedNumbers: []
    };

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.filter(
                (number) => number !== clickedNumber
            )
        }))
    }

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0 ||
            this.state.usedNumbers.indexOf(clickedNumber) >= 0) {
            return;
        } 
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }))
    };

    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.numberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }));
    };

    acceptAnswer = () => {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect: null,
            numberOfStars: 1 + Math.floor(Math.random() * 9)
        }))
    };

    render() {
        const { 
            selectedNumbers, 
            numberOfStars, 
            answerIsCorrect,
            usedNumbers
        } = this.state;

        return ( 
            <div>
                <h3>Play Nine</h3>
                <div className="App-intro">
                    <div className="row space-buttom">
                        <Star numberOfStars={numberOfStars} />
                        <GameButton selectedNumbers={selectedNumbers} 
                                    acceptAnswer={this.acceptAnswer}
                                    checkAnswer={this.checkAnswer}
                                    answerIsCorrect={answerIsCorrect} />
                        <Answer selectedNumbers={selectedNumbers}
                                unselectNumber={this.unselectNumber} />
                    </div>
                    <Numbers selectedNumbers={selectedNumbers}
                            selectNumber={this.selectNumber} 
                            usedNumbers={usedNumbers} />
                </div>
            </div>
        );
    }
}

export default Game