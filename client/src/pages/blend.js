import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import roomActions from "../store/room/actions";

import { socket } from "../service/socket";

const Blend = () => {
  const { room } = useParams();

  const user = useSelector((state) => state.auth.data);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.display_name) return;
    socket.connect({
      user,
      roomId: room,
      onUpdateRoom: (room) => dispatch(roomActions.updateRoom(room)),
    });
    setLoading(false);

    return () => {
      socket.disconnect();
    };
  }, [user, room]);

  return (
    <div className="container mx-auto mt-10">
      <Link to="/" className="btn-primary">
        Back
      </Link>
      <br />
      <br />
      {!loading ? <div>New blend on room: {room}</div> : <div>Cargando...</div>}
    </div>
  );
};

export default Blend;
