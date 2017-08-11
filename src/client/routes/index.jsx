import React from 'react';
import { Switch } from 'react-router-dom';
import universal from 'react-universal-component';
import RouteWithSubRoutes from '../components/commons/RouteWithSubRoutes';

export const routes = [
  {
    key: 'home',
    path: '/',
    component: universal(import('../containers/Home')),
  },
];

const Routes = () => (
  <Switch>
    { routes.map(route => <RouteWithSubRoutes {...route} />) }
  </Switch>
);

export default Routes;
