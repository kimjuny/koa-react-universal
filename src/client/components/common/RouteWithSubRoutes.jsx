import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={!!route.exact}
    render={props => <route.component {...props} routes={route.routes} load={route.load} />}
  />
);

export default RouteWithSubRoutes;
