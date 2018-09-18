import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Contacts from './Contacts';
import { ApolloProvider, Query } from 'react-apollo'; 
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: "https://api-useast.graphcms.com/v1/cjm6qmvew02p601c4jqk7dtmy/master"
});

const POST_QUERY = gql`
{
  posts {
    id
    title
    body
  }
}
`;

// client.query({
//   query: testQuery
// }).then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">CRM</h1>
          </header>
          <Query query={POST_QUERY}>
            {({loading, data}) => {
              if (loading) return "Loading...";
              const { posts } = data;
              return posts.map(post => <h1>{post.title}</h1>)
            }}
          </Query>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
