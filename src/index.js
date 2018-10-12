import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './app/routes';

import initialState from './app/initialState';
import configureStore from './app/configureStore';

import HomePage from './app/HomePage';

import './styles/style.css';


const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    {/* <Router history={browserHistory} routes={routes} /> */}
    <HomePage />
  </Provider>,
  document.getElementById('app')
);
