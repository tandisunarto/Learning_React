import React, { Component } from 'react';
import './App.css';

import AuthStatusCompose from './AuthStatusCompose';
import AuthStatusQuery from './AuthStatusQuery';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AuthStatusCompose />
        <AuthStatusQuery />
      </React.Fragment>
    )
  }
}

export default App;
