import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './Contacts';
import { ApolloClient, ApolloProvider } from 'react-apollo';

const client = new ApolloClient();

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">CRM</h1>
          </header>
          <Contacts />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
