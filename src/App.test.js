import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './utils/detect_browser';
import './utils/origin_polyfill';
import store from './store';
import App from './App';
import './index.css';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div);
});
