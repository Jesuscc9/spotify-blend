import React from "react";
import { Login as LoginButton } from "../components/login/login";

export const Login = () => {
  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-center text-5xl">Login </h1>
      <div className="flex justify-center mt-10">
        <LoginButton />
      </div>
    </div>
  );
};

export default Login;
