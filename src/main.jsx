import './favicon.ico';
import './main.css';
import 'data/openapi.yml';

import store from 'store';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import OpenAPIActions from 'actions/OpenAPIActions';
import App from 'screens/App';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementsByClassName('main')[0]);

// Load spec
store.dispatch(OpenAPIActions.load('/openapi.yml'));
