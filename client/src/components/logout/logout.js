import React from "react";
import Cookies from "js-cookie";

import { useDispatch } from "react-redux";
import authActions from "../../store/auth/actions";

export const Logout = () => {
  const dispatch = useDispatch();

  return (
    <button className="btn-danger absolute bottom-10" onClick={() => {
      dispatch({type: authActions.LOGOUT})
    }}>
      Log out
    </button>
  );
};
