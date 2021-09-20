import actions from "./actions";

const initialState = {
  room: {},
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case actions.SET_ROOM:
      return { ...state, ...payload.data };
    default:
      return state;
  }
};

export default reducer;