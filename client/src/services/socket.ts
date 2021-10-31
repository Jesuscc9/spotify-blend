import { io } from "socket.io-client";

interface ConnectProps {
  user: string,
  roomId: string,
  onUpdateRoom: (room: string) => void,
  onBlendingRoom: () => void,
}

interface SocketType {
  room: string,
  instance: any,
  connect: (obj: ConnectProps) => void,
  disconnect: () => void,
  setBlending: () => void,
}

interface SocketParams {
  query: string
}

export const socket: SocketType = {
  room: "",
  instance: undefined,
  connect: ({user, roomId, onUpdateRoom, onBlendingRoom}) => {
    socket.room = roomId;

    if (!socket.instance) {
      socket.instance = io(`http://localhost:3001/`, { query: { room: roomId } });
    }

    socket.instance.connect();

    socket.instance.emit("newUser", user);

    socket.instance.on("updateRoom", (room: string) => {
      onUpdateRoom(room);
    });

    socket.instance.on("blending", (room: string) => {
      if(room !== socket.room) return;
      onBlendingRoom();
    })

  },
  disconnect: () => {
    socket.instance.disconnect();
    socket.instance = undefined;
  },
  setBlending: () => {
    socket.instance.emit("blending", socket.room)
  }
};
