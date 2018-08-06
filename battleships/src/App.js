import React, { Component } from 'react';
import './App.css';
import Arena from './Arena';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./battleship.png" className="App-logo" alt="logo" />
          <h1 className="App-title">version 1.0</h1>
        </header>
        <div className="App-intro">
          <Arena />
        </div>
      </div>
    );
  }
}

export default App;
