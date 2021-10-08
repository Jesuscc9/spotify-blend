import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";

import userActions from "../store/user/actions";

const Blend = () => {
  const { room } = useParams();

  const [socket, setSocket] = useState();

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: userActions.SET_USER });
      const newSocket = io(`http://localhost:3001/`, { query: `room=${room}` });
      setSocket(newSocket);
      newSocket.emit("newUser", user.display_name);
    };

    fetchData();
  }, []);

  return (
    <>
      {socket && (
        <div className="container mx-auto mt-10">
          <Link to="/" className="btn-primary">Back</Link>
          <br />
          <br />
          <p>New blend on room: {room}</p>
        </div>
      )}
    </>
  );
};

export default Blend;
