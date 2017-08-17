import {
  createStore, applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const configureStore = initialState =>
  createStoreWithMiddleware(reducers, initialState);

export default configureStore;
