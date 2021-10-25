import { io } from "socket.io-client";

interface ConnectFn {
  (obj: any): any
}

interface SocketType {
  socketInstance: any,
  connect: ConnectFn,
  disconnect: () => void,
}

export const socket: SocketType = {
  socketInstance: undefined,
  connect: ({user, roomId, onUpdateRoom}) => {
    if (!roomId || !user) return;

    if (!socket.socketInstance) {
      socket.socketInstance = io(`http://localhost:3001/`, { query: { string: `room=${roomId}`} });
    }

    socket.socketInstance.connect();

    socket.socketInstance.emit("newUser", user);
    socket.socketInstance.on("updateRoom", (room: string) => {
      if(!onUpdateRoom) return
      onUpdateRoom(room)
    });
  },
  disconnect: () => {
    socket.socketInstance.disconnect();
    socket.socketInstance = undefined;
  },
};
