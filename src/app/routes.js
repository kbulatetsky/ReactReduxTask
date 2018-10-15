import React from 'react';
import {Route, IndexRoute} from 'react-router-dom';

import BreweriesPage from '../breweries/BreweriesPage';
import AboutPage from './AboutPage';

export default(
  <div>
    <Route path="/" exact component={BreweriesPage}/>
    <Route path="/about" component={AboutPage}/>
  </div>
);
