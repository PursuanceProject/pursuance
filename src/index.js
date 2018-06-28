import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'string.prototype.startswith';
import './utils/detect_mobile';
import './utils/detect_browser';
import './utils/origin_polyfill';
import './utils/object_values_polyfill';
import store from './store';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
