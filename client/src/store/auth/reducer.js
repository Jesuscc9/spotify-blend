import authActions from "./actions";

const initialState = {};

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case authActions.LOGOUT:
      console.log({type})
      return state;
    default:
      return state;
  }
};

export default reducer;