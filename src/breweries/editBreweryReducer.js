import * as actionTypes from './BreweriesActionTypes';
import initialState from '../app/initialState';

export default function editBreweryReducer(state = initialState.editBrewery, action){
  switch (action.type){
    case actionTypes.EDIT_BREWERY:
      return Object.assign({}, action.brewery);

    default:
      return state;
  }
}
