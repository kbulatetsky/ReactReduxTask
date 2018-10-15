import * as actionTypes from './BreweriesActionTypes';
import initialState from '../app/initialState';

export default function breweryReducer(state = initialState.breweries, action){
  switch (action.type){

    case actionTypes.LOAD_BREWERIES_SUCCESS:
      return [...action.breweries];


    case actionTypes.DELETE_BREWERY:
      const breweries = [...state];
      const breweryIndex = breweries.findIndex(b => b.id == action.breweryId);
      breweries.splice(breweryIndex, 1);
      return breweries;

    default:
      return state;
    }
}
