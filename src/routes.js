
import React from  'react';
import { Redirect, Route, Switch } from 'react-router';
import HomePage from './pages/home/container';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
];

const RouteMap = () => (
  <React.Fragment>
    <Switch>
      { routes.map((item, index) => <Route { ...item } key={index} />) }
      <Redirect exact from="*" to="/" />
    </Switch>
  </React.Fragment>
);

export default RouteMap;