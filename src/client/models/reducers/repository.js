import createReducer from './createReducer';

const initialState = {
  repositories: {
    data: undefined,
    query: undefined,
    total: -1,
    sync: false,
  },
};

const handlers = {
  setRepositories: (state, { payload }) => ({ ...state, repositories: payload }),
};

export default createReducer(initialState, handlers);
