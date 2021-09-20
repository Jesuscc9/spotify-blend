import actions from "./actions";

const initialState = {
  user: {},
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case actions.SET_USER:
      return { ...state, ...payload.data };
    default:
      return state;
  }
};

export default reducer;