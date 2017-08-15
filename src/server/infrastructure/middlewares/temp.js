import webpack from './webpack';
import statics from './statics';

const middlewares = (app, stats) => {
  // webpack stats
  app.use(webpack(stats));

  // static files
  app.use(statics(`${__ROOT__}/build`, { prefix: '/build' }));

  // render
  app.use(require('./render').default);
};

export default middlewares;
