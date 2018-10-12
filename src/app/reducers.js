import {combineReducers} from 'redux';

import testReducer from '../test/testCounterReducer';
import breweryReducer from '../breweries/breweryReducer';

const rootReducer = combineReducers({
  testCounter: testReducer,
  breweries: breweryReducer
});

export default rootReducer;
