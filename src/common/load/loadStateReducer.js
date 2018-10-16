import * as actionTypes from './LoadActionTypes';
import initialState from '../../app/initialState';

export default function loadStateReducer(state = initialState.loadState, action){
  switch (action.type){
    case actionTypes.LOAD_START:
      return Object.assign({}, state, {
        loading: true,
        success: false,
        error: null
      });

    case actionTypes.LOAD_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        success: true,
        error: null
      });

    case actionTypes.LOAD_FAIL:
      return Object.assign({}, state, {
        loading: false,
        success: false,
        error: action.error.message
      });

    default:
      return state;
  }
}
