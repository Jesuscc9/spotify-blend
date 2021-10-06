import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import io from "socket.io-client";

const Blend = () => {
  const { room } = useParams();

  const [socket, setSocket] = useState();

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const newSocket = io(`http://localhost:3001/`, { query: `room=${room}` });
		setSocket(newSocket)
		newSocket.emit("newUser", user)
  }, []);

  return <>{socket && <p>New blend on room: {room}</p>}</>;
};

export default Blend;
