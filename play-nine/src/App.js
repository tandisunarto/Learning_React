import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Star from './Star';
import GameButton from './GameButton';
import Answer from './Answer';
import Numbers from './Numbers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Game />
        </div>
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

export default App;
