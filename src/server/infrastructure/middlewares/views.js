import views from 'koa-views';

export default views(
  `${__ROOT__}/src/server/infrastructure/templates`,
  { map: { html: 'ejs' }, extension: 'ejs' },
);
