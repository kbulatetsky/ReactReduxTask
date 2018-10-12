import {combineReducers} from 'redux';

import breweryReducer from '../breweries/breweryReducer';

const rootReducer = combineReducers(
  breweryReducer
);

export default rootReducer;
