import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import roomActions from "../store/room/actions";
import { Particles } from "../components/particles/particles";
import { socket } from "../services/socket";
import { ProfileImage } from "../components/profileImage/profileImage";

const Blend = () => {
  const { roomId } = useParams();

  const user = useSelector((state) => state.auth.data);
  const room = useSelector((state) => state.room);

  const [loading, setLoading] = useState(true);
  const [makeBlend, setMakeBlend] = useState(false);

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

  return (
    <div className="container mx-auto mt-10">
      <Particles attract={makeBlend} />
      <Link to="/" className="btn-primary">
        Back
      </Link>
      {!loading ? (
        <>
          <div className="my-10">New blend on room: {roomId}</div><button className="btn-primary" onClick={() => setMakeBlend(!makeBlend)}>
            Make Blend
          </button>
          {room.users.length && (
            <div className="my-20 flex justify-between p-20">
              {room.users.map((user, i) => (
                <div key={i}>
                  <div className="absolute w-screen h-screen top-0 left-0 flex justify-between items-center px-40" style={{zIndex: -20}}>
                    <ProfileImage src={user.images[0].url} attract={makeBlend}/>
                  </div>

                  <ul className="overflow-y-scroll h-60 hidden">
                    {user.topTracks.items.map((track, i) => (
                      <li key={i}>
                        <a
                          href={track.external_urls.spotify}
                          target="_blank"
                          className="underline"
                        >
                          {track.name}
                        </a>
                      </li>
                    ))}
                  </ul>
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

export default Blend;
