import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './font-awesome-4.7.0/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
