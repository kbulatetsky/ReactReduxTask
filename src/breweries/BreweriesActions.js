import * as types from './BreweriesActionTypes';

export function loadBrewerySuccess(breweries){
  return { type: types.LOAD_BREWERIES_SUCCESS, breweries: breweries };
}

export function deleteBrewery(breweryId){
  return { type: types.DELETE_BREWERY, breweryId: breweryId };
}

export function loadBreweries({url, dispatch}){
  const xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          const breweries = JSON.parse(this.responseText);
          const action = loadBrewerySuccess(breweries);
          dispatch(action);
      }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}


