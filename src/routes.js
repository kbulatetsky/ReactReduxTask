import React from 'react';
import {Route, IndexRoute} from 'react-router';

import MainLayout from './Common/MainLayoutComponent';
import HomePage from './Home/HomePageComponent';
import AboutPage from './Common/AboutPageComponent';

export default(
    <Route path="/" component={MainLayout}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
    </Route>
);
