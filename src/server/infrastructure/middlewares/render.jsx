import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { flushChunkNames } from 'react-universal-component/server';
import webpackFlushChunks from 'webpack-flush-chunks';
import Routes from '../../../client/routes';

const renderMiddleware = async (ctx, next) => {
  const content = renderToString(
    <StaticRouter
      location={ctx.path}
      context={ctx}
    >
      <Routes />
    </StaticRouter>
  );

  console.log(content);

  const chunkNames = flushChunkNames();
  console.log(chunkNames);
  const { js } = webpackFlushChunks(ctx.state.webpackStats.toJson(), { chunkNames });

  console.log(js.toString());

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

export default renderMiddleware;
