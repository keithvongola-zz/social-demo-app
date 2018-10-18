export const createReducer = (initialState, actionsMap) => (state = initialState, action = {}) => {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
};
