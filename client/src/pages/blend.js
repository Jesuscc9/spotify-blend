import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import userActions from "../store/user/actions";
import roomsActions from "../store/rooms/actions";

const Blend = () => {
  const { room } = useParams();

  const [socket, setSocket] = useState();

  const user = useSelector((state) => state.auth.data);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.display_name) return;

    const fetchData = async () => {
      const newSocket = io(`http://localhost:3001/`, { query: `room=${room}` });
      setSocket(newSocket);
      newSocket.emit("newUser", user);
      newSocket.on("rooms", (rooms) => {
        dispatch(roomsActions.updateRooms(rooms));
      });
    };

    fetchData();
  }, [user]);

  return (
    <>
      <div className="container mx-auto mt-10">
        <Link to="/" className="btn-primary">
          Back
        </Link>
        <br />
        <br />
        {socket ? (
          <div>New blend on room: {room}</div>
        ) : (
          <div>Cargando...</div>
        )}
      </div>
    </>
  );
};

export default Blend;
