import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

const hoc = (
    <Router>
        <App />
    </Router>
)

ReactDOM.render(hoc, document.getElementById('root'));
registerServiceWorker();
