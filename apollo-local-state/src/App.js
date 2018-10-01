import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import AuthStatusCompose from './AuthStatusCompose';
import AuthStatusQuery from './AuthStatusQuery';
import AddBook from './AddBook';
import Auth from './Auth';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/compose" component={AuthStatusCompose} />
          <Route path="/query" component={AuthStatusQuery} />
          <Route path="/addbook" component={AddBook} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
