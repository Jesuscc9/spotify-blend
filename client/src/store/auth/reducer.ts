import authActions from "./actions"; import { ActionType } from "../../types";

interface AuthStateType {
  isAuth: boolean;
  data: any;
}

const initialState: AuthStateType = {
  isAuth: false,
  data: {},
};

const reducer = (state = initialState, action: any): AuthStateType => {
  const { payload, type } = action;

  switch (type) {
    case authActions.SET_DATA:
      return { ...state, isAuth: true, data: payload };
    case authActions.LOGOUT:
      return state;
    default:
      return state;
  }
};

export default reducer;
