import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import { GlobalStyles } from "./login.style";

export const Login = () => {
  return (
    <>
      <GlobalStyles />
      <SpotifyAuth
        redirectUri="http://localhost:3000/"
        clientID="77938d7cd1614389803467785283c056"
        scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]}
        btnClassName="btn-primary flex text-black"
        logoClassName="text-white w-45"
        onAccessToken={() => {
          window.location = "/";
        }}
      />
    </>
  );
};
