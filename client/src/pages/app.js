import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { Logout } from "../components/logout/logout";
import { spotifyApi } from "../spotifyApi";
import userActions from "../redux/user/actions";

const App = () => {
  const [roomId, setRoomId] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(userActions.setUser(await spotifyApi.me()));
    };

    try {
      fetchData();
    } catch (e) {
      alert("e");
    }
  }, []);

  const handleClick = () => {
    setRoomId(randomString(8));
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-center">Start new blend</h1>
      <button className="btn-primary mx-auto mt-10" onClick={handleClick}>
        Make blend!
      </button>
      {roomId && <Redirect to={`/blend/${roomId}`} />}
      <Logout />
    </div>
  );
};

const randomString = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export default App;
