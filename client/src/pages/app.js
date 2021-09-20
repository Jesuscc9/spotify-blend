import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Logout } from "../components/logout/logout";
import { spotifyApi } from "../spotifyApi";

const randomString = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const App = () => {

  const [roomId, setRoomId] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      await spotifyApi.me();
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setRoomId(randomString(8))
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-center">Start new blend</h1>
      <button className="btn-primary mx-auto mt-10" onClick={handleClick}>Make blend!</button>
      {roomId && <Redirect to={`/blend/${roomId}`} />}
      <Logout />
    </div>
  );
};

export default App;
