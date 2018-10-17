import * as actionTypes from './BreweriesActionTypes';
import initialState from '../app/initialState';

export default function breweriesReducer(state = initialState.breweries, action){
  switch (action.type){

    case actionTypes.LOAD_BREWERIES_SUCCESS:
      return [...action.breweries];

    case actionTypes.FILTER_BREWERIES_SUCCESS:
      return [...action.breweries];

    case actionTypes.ADD_BREWERY: {
      const breweries = [...state];
      breweries.splice(0, 0, action.brewery);
      return breweries;
    }

    case actionTypes.UPDATE_BREWERY: {
      const breweries = [...state];
      const breweryIndex = breweries.findIndex(b => b.id == action.brewery.id);
      breweries.splice(breweryIndex, 1, action.brewery);
      return breweries;
    }

    case actionTypes.DELETE_BREWERY: {
      const breweries = [...state];
      const breweryIndex = breweries.findIndex(b => b.id == action.breweryId);
      breweries.splice(breweryIndex, 1);
      return breweries;
    }

    default:
      return state;
    }
}
