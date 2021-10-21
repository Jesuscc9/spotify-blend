import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import roomActions from "../store/room/actions";

import { socket } from "../service/socket";

const Blend = () => {
  const { roomId } = useParams();

  const user = useSelector((state) => state.auth.data);
  const room = useSelector((state) => state.room);


  useEffect(() => console.log(room),[room])

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.display_name) return;
    socket.connect({
      user,
      roomId,
      onUpdateRoom: (room) => dispatch(roomActions.updateRoom(room)),
    });
    setLoading(false);

    return () => {
      socket.disconnect();
    };
  }, [user, roomId]);

  const defaultUserImg = "http://dissoftec.com/DefaultUserImage.png"

  return (
    <div className="container mx-auto mt-10">
      <Link to="/" className="btn-primary"> Back </Link>
      <br />
      <br />
      {!loading ? <div>New blend on room: {roomId}</div> : <div>Cargando...</div>}
      {room.users.length &&
      <div className="flex justify-between my-20 border">
        {room.users.map((user, i) => (
          <img src={user.images[0]?.url ? user.images[0].url : defaultUserImg} key={i} className="rounded-full w-10"/>
        ))}
      </div>
}
    </div>
  );
};

export default Blend;
