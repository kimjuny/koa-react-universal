// this index file is the entry of webpack server-side config.
// just export all your async koa2 middlewares here.

export const logger = require('./logger').default;

export const favicon = require('./favicon').default;

export const statics = require('./statics')(`${__ROOT__}/build`, { prefix: '/build' });

export const views = require('./views').default;

export const render = require('./render').default;
