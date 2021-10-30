import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import roomActions from "../../store/room/actions";
import { socket } from "../../services/socket";
import { ProfileImage, Particles } from "../../components";

import { RootStateType } from "../../store";

export const Blend = () => {
  const { roomId }: any = useParams();

  const dispatch = useDispatch();

  const user = useSelector((state: RootStateType) => state.auth.data);
  const room = useSelector((state: RootStateType) => state.room);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user.display_name) return;
    socket.connect({
      user,
      roomId,
      onUpdateRoom: (room: string) => dispatch(roomActions.updateRoom(room)),
    });
    setLoading(false);

    return () => {
      socket.disconnect();
    };
  }, [user, roomId]);

  useEffect(() => {
    dispatch(roomActions.setRoomStatus("starting"));
  }, []);

  const handleBlendClick = () => {
    dispatch(roomActions.setRoomStatus("blending"));
  };

  return (
    <div className="container mx-auto mt-10">
      <Particles />
      
      <Link to="/" className="btn-primary">
        Back
      </Link>

      {!loading ? (
        <>
          <div className="my-10">New blend on room: {roomId}</div>
          <button className="btn-primary" onClick={handleBlendClick}>
            Make Blend
          </button>
          {room.users.length && (
            <div className="my-20 flex justify-between p-20">
              {room.users.map((user: any, i: number) => (
                <div
                  className="absolute w-screen h-screen top-0 left-0 flex justify-between items-center px-40"
                  style={{ zIndex: -20 }}
                  key={i}
                >
                  <ProfileImage
                    src={user.images[0].url}
                    side={i % 2 == 0 ? true : false}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div>Cargando...</div>
      )}
      <br />
    </div>
  );
};
