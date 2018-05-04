import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { AppRoutes } from './Routes';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Routing</h1>
        </header>
        <div>
            [ <a href="/atlantic">Atlantic</a> | <a href="/pacific">Pacific</a> ]
        </div>
        <br />
        <div className="App-intro">
          <AppRoutes />
        </div>
      </div>
    );
  }
}

export default App;
