import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import client from './Client';

ReactDOM.render(
<Router>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
</Router>
, document.getElementById('root'));
registerServiceWorker();
