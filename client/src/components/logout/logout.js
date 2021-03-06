import React from "react";
import Cookies from "js-cookie";

export const Logout = () => {
  return (
    <button
      className="btn-danger absolute bottom-0"
      onClick={() => {
        Cookies.remove("spotifyAuthToken");
        window.location = "/"
      }}
    >
      Log out
    </button>
  );
};
