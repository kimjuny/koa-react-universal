import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './models/store';
import Routes from './routes';

const store = configureStore(window.__STATE__);

const render = (Component) => {
  ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'));
};

if (module.hot) {
  module.hot.accept('./routes/index.jsx', () => {
    const Routes = require('./routes').default;
    render(Routes);
  });
}

render(Routes);
