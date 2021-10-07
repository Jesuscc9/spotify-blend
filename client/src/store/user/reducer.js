import actions from "./actions";

const initialState = {};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case actions.SET_USER_DATA:
      return { ...state, ...payload.data };
    case actions.INITIAL_STATE:
      return {...initialState};
    default:
      return state;
  }
};

export default reducer;
