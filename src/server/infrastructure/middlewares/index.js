
export const logger = require('./logger').default;

export const statics = require('./statics')(`${__ROOT__}/build`, { prefix: '/build' });

export const render = require('./render').default;
