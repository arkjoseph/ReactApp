import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import FyRatesPage from './components/course/FyRatesPage';
import ManageCoursesPage from './components/course/ManageFyRatePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="fy-rates" component={FyRatesPage}/>
        <Route path="course" component={ManageCoursesPage}/>
        <Route path="course/:id" component={ManageCoursesPage}/>
        <Route path="about" component={AboutPage}/>
    </Route>
);