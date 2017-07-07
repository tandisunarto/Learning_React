import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TestButton from './Button';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TestButton />, document.getElementById('test-button'));
registerServiceWorker();
