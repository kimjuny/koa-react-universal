
const middlewares = (app, stats) => {
  // static files
  app.use(require('./static')(`${__ROOT__}/build`, { prefix: '/build' }));

  // render
  app.use(require('./render').default(stats));
};

export default middlewares;
