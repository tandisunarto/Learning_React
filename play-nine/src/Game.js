import React, { Component } from 'react';
import Star from './Star';
import GameButton from './GameButton';
import Answer from './Answer';
import Numbers from './Numbers';
import DoneFrame from './DoneFrame'
import './App.css';

import * as _ from 'lodash';


class Game extends Component {
    randomNumber = () => 1 + Math.floor(Math.random() * 9);

    initialState = () => ({
        selectedNumbers: [],
        numberOfStars: this.randomNumber(),
        answerIsCorrect: null,
        usedNumbers: [],
        redraws: 5,
        doneStatus: null
    });

    state = this.initialState();

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
            numberOfStars: this.randomNumber()
        }), this.updateDoneStatus)
    };

    redraw = () => {
        if (this.state.redraws > 0) {
            this.setState(prevState => ({
                numberOfStars: this.randomNumber(),
                answerIsCorrect: null,
                selectedNumbers: [],
                redraws: prevState.redraws - 1,
            }), this.updateDoneStatus)
        }
    };

    updateDoneStatus = () => {
        console.log('>>>>> ' + Date.now() + ' updating done status ');
        this.setState(prevState => {
            if (prevState.usedNumbers.length === 9) {
                return { doneStatus: 'You beat the game'};
            }
            if (prevState.redraw === 0 && !this.possibleSolutions(prevState)) {
                return { doneStatus: 'Game Over. You lost'};
            }
        })
    }

    possibleSolutions = ({numberOfStars, usedNumbers}) => {
        const possibleSolutions = _.range(1, 10).filter(number =>
            usedNumbers.indexOf(number) === -1
        );

        return this.possibleCombinationSum(this.possibleNumbers, numberOfStars);
    }

    possibleCombinationSum = function (arr, n) {
        if (arr.indexOf(n) >= 0) { return true; }
        if (arr[0] > n) { return false; }
        if (arr[arr.length - 1] > n) {
            arr.pop();
            return this.possibleCombinationSum(arr, n);
        }
        var listSize = arr.length, combinationsCount = (1 << listSize)
        for (var i = 1; i < combinationsCount; i++) {
            var combinationSum = 0;
            for (var j = 0; j < listSize; j++) {
                if (i & (1 << j)) { combinationSum += arr[j]; }
            }
            if (n === combinationSum) { return true; }
        }
        return false;
    };

    resetGame = () => {
        this.setState(this.initialState());
    }

    render() {
        const { 
            selectedNumbers, 
            numberOfStars, 
            answerIsCorrect,
            usedNumbers,
            redraws,
            doneStatus
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
                                    redraw={this.redraw}
                                    redraws={redraws}
                                    answerIsCorrect={answerIsCorrect} />
                        <Answer selectedNumbers={selectedNumbers}
                                unselectNumber={this.unselectNumber} />
                    </div>
                    {doneStatus ? 
                        <DoneFrame doneStatus={doneStatus} 
                                    resetGame={this.resetGame} /> :                    
                        <Numbers selectedNumbers={selectedNumbers}
                                selectNumber={this.selectNumber} 
                                usedNumbers={usedNumbers} />
                    }
                    
                </div>
            </div>
        );
    }
}

export default Game