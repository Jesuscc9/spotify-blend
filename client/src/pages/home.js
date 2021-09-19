import React from "react";
import { Login } from "../components/login/login";

export const Home = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-center text-5xl">Login </h1>
      <div className="flex justify-center mt-10">
        <Login />
      </div>
    </div>
  );
};

export default Home;
