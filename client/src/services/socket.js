import { io } from "socket.io-client";

export const socket = {
  socketInstace: undefined,
  connect: ({user, roomId, onUpdateRoom}) => {
    if (!roomId || !user) return;

    if (!socket.socketInstace) {
      socket.socketInstace = io(`http://localhost:3001/`, {
        query: `room=${roomId}`,
      });
    }

    socket.socketInstace.connect();

    socket.socketInstace.emit("newUser", user);
    socket.socketInstace.on("updateRoom", (room) => {
      if(!onUpdateRoom) return
      onUpdateRoom(room)
    });
  },
  disconnect: () => {
    socket.socketInstace.disconnect();
    socket.socketInstace = undefined;
  },
};
