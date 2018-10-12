import React from 'react';
import {Route} from 'react-router-dom';

import HomePage from '../home/HomePage';
import BreweriesPage from '../breweries/BreweriesPage';
import AboutPage from './AboutPage';

export default(
  <div>
    <Route path="/" exact component={HomePage}/>
    <Route path="/breweries" component={BreweriesPage}/>
    <Route path="/about" component={AboutPage}/>
  </div>
);
