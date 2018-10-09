import React, { Component } from 'react';
import './App.css';

import { Switch, Route, Link } from 'react-router-dom';

import AuthStatusCompose from './AuthStatusCompose';
import AuthStatusQuery from './AuthStatusQuery';
import AddBook from './AddBook';
import Auth from './Auth';
import AuthInject from './AuthInject';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li><Link to={'/auth'}>Read/Mutate Local state</Link></li>
          <li><Link to={'/auth-inject'}>Read local state (inject to component using graphql)</Link></li>
          <li><Link to={'/query'}>Read local/remote state using query component</Link></li>
          <li><Link to={'/compose'}>Read local/remote state (inject to component using compose)</Link></li>
          <li><Link to={'/addbook'}>Mutation(add) book in graph cool</Link></li>
        </ul>
        <Switch>
          <Route path="/compose" component={AuthStatusCompose} />
          <Route path="/query" component={AuthStatusQuery} />
          <Route path="/addbook" component={AddBook} />
          <Route path="/auth" component={Auth} />
          <Route path="/auth-inject" component={AuthInject} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
