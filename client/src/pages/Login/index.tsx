import { GlobalStyles } from "./styles"
import { history } from "../../App";

const { SpotifyAuth, Scopes} = require('react-spotify-auth');

export const Login = () => {
  return (
    <>
      <GlobalStyles />
      <div className="container mx-auto mt-12">
        <h1 className="text-center text-5xl">Login </h1>
        <div className="flex justify-center mt-10">
          <SpotifyAuth
            redirectUri="http://localhost:3000/"
            clientID="77938d7cd1614389803467785283c056"
            scopes={[
              Scopes.userReadPrivate,
              Scopes.userReadEmail,
              Scopes.userTopRead,
            ]}
            btnClassName="btn-primary flex text-black"
            logoClassName="text-white w-45"
            onAccessToken={() => {
              //@ts-ignore
              window.location = "/"
            }}
          />{" "}
        </div>
      </div>
    </>
  );
};