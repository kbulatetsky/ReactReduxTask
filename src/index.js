import 'babel-polyfill';
import React from 'react';
import {createStore} from 'redux';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// combine reducers
const rootReducer = combineReducers({
});

// initial state
const intialState ={
};

const store = createStore(
  rootReducer,
  intialState
);

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
