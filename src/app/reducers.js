import {combineReducers} from 'redux';

import breweryReducer from '../breweries/breweryReducer';

const rootReducer = combineReducers({
  breweries: breweryReducer
});

export default rootReducer;
