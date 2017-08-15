import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { flushChunkNames } from 'react-universal-component/server';
import webpackFlushChunks from 'webpack-flush-chunks';
import commons from '../../../../config/commons';
import Routes from '../../../client/routes';

const getClientStats = (stats) => {
  if (stats && Array.isArray(stats.stats)) {
    return stats.stats.find(node => node.compilation.name === commons.client);
  } else if(stats && stats.compilation.name === commons.client) {
    return stats;
  }
  return undefined;
}

const render = async (ctx, next) => {
  const content = renderToString(
    <StaticRouter
      location={ctx.path}
      context={ctx}
    >
      <Routes />
    </StaticRouter>
  );

  const chunkNames = flushChunkNames();
  const { js } = webpackFlushChunks(getClientStats(ctx.state.webpackStats).toJson(), { chunkNames });

  ctx.set('Content-Type', 'text/html');
  ctx.body = `
    <!doctype html>
    <html>
      <head>
        <title>koa-react-universal</title>
      </head>
      <body>
        <div id="root">${content}</div>
        ${js}
      </body>
    </html>
  `;
  await next();
};

export default render;
