import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import io from "socket.io-client";

const Blend = () => {
  const { room } = useParams();
	
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io(`http://localhost:3001/`, { query: `room=${room}` });
		setSocket(newSocket)
  }, []);

  return <div>{socket && <p>New blend on room: {room}</p>}</div>;
};

export default Blend;
