import * as types from './LoadActionTypes';

export function loadStart(){
  return { type: types.LOAD_START };
}

export function loadSuccess(){
  return { type: types.LOAD_SUCCESS };
}

export function loadFail(error){
  return { type: types.LOAD_FAIL, error: error };
}
