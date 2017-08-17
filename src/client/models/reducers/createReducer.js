const createReducer = (initState, handlers) => {
  const reducer = (state = initState, action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
  };
  return reducer;
};

export default createReducer;
