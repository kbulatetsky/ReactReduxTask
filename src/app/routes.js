import React from 'react';
import {Route, IndexRoute} from 'react-router-dom';

import BreweriesPage from '../breweries/BreweriesPage';
import AddBreweryPage from '../breweries/AddBreweryPage';
import EditBreweryPage from '../breweries/EditBreweryPage';
import AboutPage from './AboutPage';

export default(
  <div>
    <Route path="/" exact component={BreweriesPage}/>
    <Route path="/about" component={AboutPage}/>
    <Route path="/brewery/add" component={AddBreweryPage}/>
    <Route path="/brewery/edit/:breweryId" component={EditBreweryPage}/>
  </div>
);
