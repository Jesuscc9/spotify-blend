import authActions from "./actions";

const initialState = {
  isAuth: false,
  data: {}
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case authActions.SET_DATA:
      return {...state, isAuth: true, data: payload}
    case authActions.LOGOUT:
      return state;
    default:
      return state;
  }
};

export default reducer;