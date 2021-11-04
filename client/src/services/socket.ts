import { io } from "socket.io-client";

interface ConnectProps {
  user: string;
  roomId: string;
  onUpdateRoom: (room: string) => void;
  onBlendingRoom: () => void;
}

interface SocketType {
  roomId: string;
  instance: any;
  connect: (obj: ConnectProps) => void;
  disconnect: (obj: any) => void;
  setBlending: () => void;
}

export const socket: SocketType = {
  roomId: "",
  instance: undefined,
  connect: ({ user, roomId, onUpdateRoom, onBlendingRoom }) => {
    socket.roomId = roomId;

    if (!socket.instance) {
      socket.instance = io(`http://localhost:3001/`);
    }

    socket.instance.connect();

    socket.instance.emit("newUser", { user, roomId });

    socket.instance.on("updateRoom", (room: any) => {
      if (room.id !== roomId) return;
      onUpdateRoom(room);
    });

    socket.instance.on("blending", (roomId: string) => {
      if (roomId !== socket.roomId) return;
      onBlendingRoom();
    });
  },

  disconnect: ({ userId, roomId }) => {
    socket.instance.disconnect();
    socket.instance = undefined;
  },

  setBlending: () => {
    socket.instance.emit("blending", { roomId: socket.roomId });
  },
};
