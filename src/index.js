import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import routes from './app/routes';

import initialState from './app/initialState';
import configureStore from './app/configureStore';

import Header from './app/Header';

import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header/>
        {routes}
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
