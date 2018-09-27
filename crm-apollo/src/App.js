import React, { Component } from 'react';
import './App.css';

import Posts from './Posts';
import Auth from './Auth';
import AddBook from './AddBook';

// import MyQuery from './MyQuery';

import { ApolloProvider } from 'react-apollo';
import client from "./Client";

import { Route, Switch } from 'react-router-dom';

// const defaultState = {
//     authentication: {
//         __typename: 'Authentication',
//         twofactorEnabled: false
//     } 
// }

// const twofactorEnable = gql`
//     query TwofactorEnabled {
//         twofactorEnabled @client
//     }
// `;

// const cache = new InMemoryCache();
// const stateLink = withClientState({
//     cache,
//     defaults: defaultState,
//     // resolvers: {
//     //     Query: {
//     //         twofactorEnable
//     //     }
//     // }
// })

// const client = new ApolloClient({
//     link: ApolloLink.from([
//         stateLink,
//         new HttpLink({
//             uri: "https://api-useast.graphcms.com/v1/cjm6qmvew02p601c4jqk7dtmy/master",
//         })
//     ]),
//     cache: cache
// });

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
          {/* <MyQuery query={POST_QUERY}>
          {
            (data) => {
              const { posts } = data;
              return posts.map(post => <h1>{post.title}</h1>)
            }
          }
          </MyQuery> */}
          <Switch>
            <Route path="/posts" component={Posts} />
            <Route path="/auth" component={Auth} />
            <Route path="/add" component={AddBook} />
          </Switch>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
