import axios from 'axios';

import * as types from './BreweriesActionTypes';

import * as loadActions from '../common/load/LoadActions';

export function loadBreweriesSuccess(breweries){
  return { type: types.LOAD_BREWERIES_SUCCESS, breweries: breweries };
}

export function filterBreweriesSuccess(breweries){
  return { type: types.FILTER_BREWERIES_SUCCESS, breweries: breweries };
}

export function editBrewery(brewery){
  return { type: types.EDIT_BREWERY, brewery: brewery };
}

export function addBrewery(brewery){
  return { type: types.ADD_BREWERY, brewery: brewery };
}

export function updateBrewery(brewery){
  return { type: types.UPDATE_BREWERY, brewery: brewery };
}

export function deleteBrewery(breweryId){
  return { type: types.DELETE_BREWERY, breweryId: breweryId };
}

export async function loadBreweries(dispatch){
  dispatch(loadActions.loadStart());
  try {
    const response = await axios.get('https://api.openbrewerydb.org/breweries');
    const breweries = response.data;

    dispatch(loadActions.loadSuccess());
    dispatch(loadBreweriesSuccess(breweries));
  }
  catch (err) {
    dispatch(loadActions.loadFail(err));
  }
}

export async function filterBreweries({dispatch, filter}){
  dispatch(loadActions.loadStart());
  try {
    const response = await axios.get(
      `https://api.openbrewerydb.org/breweries?by_name=${filter.name}&by_city=${filter.city}`);
    const breweries = response.data;

    dispatch(loadActions.loadSuccess());
    dispatch(filterBreweriesSuccess(breweries));
  }
  catch (err) {
    dispatch(loadActions.loadFail(err));
  }
}

export async function loadBrewery({dispatch, breweryId}){
  dispatch(loadActions.loadStart());
  try {
    const response = await axios.get(`https://api.openbrewerydb.org/breweries/${breweryId}`);
    const brewery = response.data;

    dispatch(loadActions.loadSuccess());
    dispatch(editBrewery(brewery));
  }
  catch (err) {
    dispatch(loadActions.loadFail(err));
  }
}


