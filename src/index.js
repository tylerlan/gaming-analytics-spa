import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Enable Webpack hot module replacement for reducers
// https://github.com/reactjs/react-redux/releases/tag/v2.0.0
if (module.hot) {
  module.hot.accept('./redux/reducers', () => {
    const nextRootReducer = require('./redux/reducers/');
    store.replaceReducer(nextRootReducer);
  });
}
