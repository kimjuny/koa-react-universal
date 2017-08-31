/* eslint-disable react/jsx-filename-extension, no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from '../../client/models/store';

export function snapshot(options) {
  const { name, props = {}, store } = options;
  it(`${name} should render correctly`, () => {
    const wrapper = (
      <Provider store={store || configureStore()}>
        <BrowserRouter>
          <options.component {...props} />
        </BrowserRouter>
      </Provider>
    );
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
}
/* eslint-enable */
