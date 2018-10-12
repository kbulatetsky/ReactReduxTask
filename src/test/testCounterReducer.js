import * as types from './TestCounterActionTypes';
import initialState from '../app/initialState';

export default function testReducer(state = initialState.testCounter, action){
  switch (action.type){
    case types.INCREMENT_COUNTER:
      return state + 1;

    case types.DECREMENT_COUNTER:
      return state - 1;

    default:
      return state;
  };
};
