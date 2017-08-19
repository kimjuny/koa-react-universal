# Koa React Universal ( 👷 work-in-progress 👷 )

> koa2、react、react-universal-component、koa-webpack-server、async/await、code-splitting、hot-module-replacement

This project is dedicated to build <b>simple yet powerful</b> Koa-React-Universal application boilerplate.

<b>Less is More:</b> All key ingredients are in `src/development`、`src/production` and webpack configurations, easy to understand、set-up and extend. We promise to use the most recent & official packages(as much as we can), no weird or tricky stuffs, keeping this project <b>clean and fully customizable</b>.

<b>Universal:</b> We are using [react-universal-component](https://github.com/faceyspacey/react-universal-component)、[webpack-flush-chunks](https://github.com/faceyspacey/webpack-flush-chunks). It simplifies <b>universal</b> development with <b>code-splitting</b>(js、css) and is also compatible with the latest react-router-v4.

<b>Production:</b> We are using webpack to build client(target: web) and server(target: node).

<b>Development:</b> We are using [koa-webpack-server](https://github.com/kimjuny/koa-webpack-server), it also webpacks client and server(with client & server hot-load), so we can stay as much as the same with production.

> Noted: This project is still on early stage.

### Screenshots

> Noted: Github API has a [Rate Limiting](https://developer.github.com/v3/search/#rate-limit) 10request/min.

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

* yarn / npm
* node ≥ 7.0

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


