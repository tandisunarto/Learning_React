import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestButton from './TestButton';
import { TestLabel } from './TestLabel';
import { Greeting } from './Greeting';
import PropTypes from '../node_modules/prop-types/prop-types';


class App extends Component {
  // if title is set to a value type of number 2017, the warning will show up on the console
  title = "2017"; 
  subTitle = "What's up !!";
  otherLabel = "Click +/- to increment/decrement counter";

  static childContextTypes = {
    testLabel: PropTypes.string
  }

  getChildContext() {
    return {
      testLabel: this.otherLabel
    }
  }

  render() {    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greeting 
            title={this.title}></Greeting>
          <TestButton></TestButton>
          <TestLabel></TestLabel>
        </div>

      </div>
    );
  }
}

export default App;
