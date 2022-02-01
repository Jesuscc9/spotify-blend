import { useDispatch } from "react-redux";
import authActions from "../../store/auth/actions";
import React from "react";

export const Logout = () => {
  const dispatch = useDispatch();

  return (
    <button className="btn-danger absolute bottom-10" onClick={() => {
      dispatch(authActions.logout())
    }}>
      Log out
    </button>
  );
};
