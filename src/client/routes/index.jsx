import React from 'react';
import { Switch } from 'react-router-dom';
import universal from 'react-universal-component';
import RouteWithSubRoutes from '../components/common/RouteWithSubRoutes';
import { listRepositories } from '../models/actions/repository';
import { parse } from '../../shared/utils/url';

export const routes = [
  {
    key: 'home',
    path: '/',
    exact: true,
    component: universal(import('../containers/Home')),
  }, {
    key: 'repositories',
    path: '/repositories',
    component: universal(import('../containers/Repository')),
    load: (dispatch, url) => {
      const query = parse(url).query;
      return dispatch(listRepositories({ query }));
    },
  },
];

export default () => (
  <Switch>
    { routes.map(route => <RouteWithSubRoutes {...route} />) }
  </Switch>
);
