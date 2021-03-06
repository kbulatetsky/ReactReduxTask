import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import routes from './app/routes';

import history from './app/history';
import initialState from './app/initialState';
import configureStore from './app/configureStore';

import Header from './app/Header';

import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header/>
        {routes}
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
