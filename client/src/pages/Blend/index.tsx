import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import roomActions from "../../store/room/actions";
import { ProfileImage, Particles } from "../../components";
import { RootStateType } from "../../store";
import { AnimatePresence, motion } from "framer-motion";

export const Blend = () => {
  const { roomId }: any = useParams();

  const dispatch = useDispatch();

  const user = useSelector((state: RootStateType) => state.auth.data);
  const room = useSelector((state: RootStateType) => state.room);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user.display_name) return;
    dispatch(
      roomActions.connectRoom({
        user,
        roomId,
        onUpdateRoom: (room: string) => dispatch(roomActions.updateRoom(room)),
        onBlendingRoom: () => {
          dispatch(roomActions.setRoomStatus("blending"));

          //setTimeout only with simulation purposes xd
          setTimeout(() => {
            dispatch(roomActions.setRoomStatus("finished"));
          }, 5000);
        },
      })
    );

    setLoading(false);

    return () => {
      dispatch(roomActions.disconnectRoom({ userId: user.id, roomId }));
    };
  }, [user, roomId]);

  useEffect(() => {
    dispatch(roomActions.setRoomStatus("ready"));
  }, []);

  const handleBlendClick = () => {
    dispatch(roomActions.setBlending());
  };

  return (
    <div className="container mx-auto mt-10">
      <Particles />

      <Link to="/" className="btn-primary">
        Back
      </Link>

      {room?.status === "finished" && <Playlist users={room.users} />}

      {!loading ? (
        <>
          <div className="my-10">New blend on room: {roomId}</div>
          {room.status == "ready" && room?.activeUsers === 2 && (
            <button className="btn-primary" onClick={handleBlendClick}>
              Make Blend
            </button>
          )}
          {room.users.length > 0 && (
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
                    index={i}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div>necesito un loadeeerrr...</div>
      )}

      <br />
    </div>
  );
};

interface PlaylistProps {
  users: any;
}

const Playlist = ({ users }: PlaylistProps) => {
  return (
    <AnimatePresence>
      <motion.div className="container border flex">
        {users.map((user: any, i: number) => (
          <motion.div layoutId={`user-image-container-${i}`}>
            <img src={user.images[0].url} alt="clairo" className="w-20 h-20 rounded-full"/>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
