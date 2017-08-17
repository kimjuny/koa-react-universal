import { combineReducers } from 'redux';
import repository from './repository';

const usecaseReducers = {
  repository,
};

export default combineReducers({ ...usecaseReducers });
