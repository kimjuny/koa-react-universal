# Koa React Universal ( 👷 work-in-progress 👷 )

> koa2、react、react-universal-component、koa-webpack-server、async/await、code-splitting、hot-module-replacement

This project is dedicated to build <b>simple yet powerful</b> Koa-React-Universal application boilerplate.

<b>Less is More:</b> All key ingredients are in `src/development`、`src/production` and webpack configurations, easy to setup and extend. We promise to use official stuffs(as much as we can), no weird or tricky stuffs, keeping this project <b>clean and customizable</b>.

<b>Universal:</b> We are using [react-universal-component](https://github.com/faceyspacey/react-universal-component)、[webpack-flush-chunks](https://github.com/faceyspacey/webpack-flush-chunks). It simplifies <b>universal</b> development with <b>code-splitting</b>(js、css) and is also compatible with the latest react-router-v4.

<b>Production:</b> We are using webpack to build client(target: web) and server(target: node).

<b>Development:</b> We are using [koa-webpack-server](https://github.com/kimjuny/koa-webpack-server), it also webpacks client and server(with client & server hot-load), so we can stay as much as the same with production.

> Noted: This project is still on early stage.

### Screenshots

### Components

* koa2
* react
* react-router4
* redux-thunk
* react-universal-component
* es2015 + async/await
* less
* webpack
* koa-webpack-server
* webpack-flush-chunks
* axios
* ejs

### Roadmap

* graphql(github REST API -> github graphql API)
* continuous integration
* flow
* jest
* enzyme
* immutable
* vendor

### Start

#### Prerequisites

```
yarn
```

#### Production

```
yarn prod
```

#### Development

```
yarn dev
```

#### Test

```
yarn test
```

### License

[MIT](https://github.com/kimjuny/koa-react-universal/blob/master/LICENSE)

### Contributing


