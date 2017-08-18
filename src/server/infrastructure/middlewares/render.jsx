import 'colors';
import React from 'react';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { flushChunkNames } from 'react-universal-component/server';
import webpackFlushChunks from 'webpack-flush-chunks';
import Routes, { routes } from '../../../client/routes';
import configureStore from '../../../client/models/store';
import commons from '../../../../config/commons';

const getClientStats = (stats) => {
  if (stats && Array.isArray(stats.stats)) {
    return stats.stats.find(node =>
      node.compilation.name === commons.client);
  } else if (stats && stats.compilation.name === commons.client) {
    return stats;
  }
  return undefined;
};

const match = async (ctx, routes, dispatch) => {
  for (let i = 0; i < routes.length; i += 1) {
    const route = routes[i];
    if (matchPath(ctx.path, route)) {
      if (typeof route.load === 'function') {
        await route.load(dispatch, ctx.request.href);
      }
      if (route.routes && route.routes.length > 0) {
        await match(ctx, route.routes, dispatch);
      }
      return true;
    }
  }
  return false;
};

const render = async (ctx) => {
  try {
    const store = configureStore();

    if (await match(ctx, routes, store.dispatch)) {
      const content = renderToString(
        <Provider store={store}>
          <StaticRouter
            location={ctx.path}
            context={ctx}
          >
            <Routes />
          </StaticRouter>
        </Provider>,
      );

      const chunkNames = flushChunkNames();
      const stats = getClientStats(ctx.state.webpackStats);
      const { js, styles, cssHash } = webpackFlushChunks(stats.toJson(), { chunkNames });

      await ctx.render('200', { content, js, styles, cssHash, state: store.getState() });
    } else {
      await ctx.render('404', { message: 'Page not found :-(' });
    }
  } catch (error) {
    console.error(`${'[ERR]'.rainbow} SSR %s`, error.message);
    await ctx.render('500', {
      message: `<div>message: ${error.message}</div>
                <div>errors: ${JSON.stringify(error.errors)}</div>`,
    });
  }
};

export default render;
