import 'colors';
import http from 'http';
import Koa from 'koa';
import middlewares from './infrastructure/middlewares';

const server = (stats) => {
  const app = new Koa();
  
  // apply middlewares
  middlewares(app, stats);

  // start server
  http.createServer(app.callback()).listen(3008, () => {
    console.log(`${'[SYS]'.rainbow} server started at port 3008`);
  });
};

export default server;
