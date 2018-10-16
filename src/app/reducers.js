import {combineReducers} from 'redux';

import breweriesReducer from '../breweries/breweriesReducer';
import editBreweryReducer from '../breweries/editBreweryReducer';
import loadStateReducer from '../common/load/loadStateReducer';

const rootReducer = combineReducers({
  breweries: breweriesReducer,
  editBrewery: editBreweryReducer,
  loadState: loadStateReducer
});

export default rootReducer;
