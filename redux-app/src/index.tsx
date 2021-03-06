import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducers } from './Reducers/RootReducer';

const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
