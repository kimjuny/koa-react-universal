const webpackMiddleware = (stats) => {
  if (process.env.NODE_ENV === 'production') {
    return async (ctx, next) => {
      ctx.state.webpackStats = stats;
      await next();
    }
  } else {
    require('colors');
    const webpack = require('webpack');
    const KoaWebpack = require('koa-webpack');
    const config = require('../../../../config/webpack.dev.config');

    const compiler = webpack(config);

    compiler.plugin('done', () => {
      console.log(`${'[SYS]'.rainbow} webpack build finished`);
    });

    return KoaWebpack({
      compiler,
      dev: {
        hot: true,
        noInfo: false,
        quiet: true,
        lazy: false,
        watchOptions: {
          aggregateTimeout: 300,
          poll: true,
        },
        publicPath: compiler.options.output.publicPath,
        stats: {
          colors: true,
        },
        serverSideRender: true,
      },
    });
  }
};

export default webpackMiddleware;
