const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let rooms = [];

io.on("connection", (socket) => {


  socket.on("newUser", ({ user, roomId }) => {
    socket.userId = user.id;
    socket.roomId = roomId;

    let roomIndex = rooms.findIndex((room) => room.id === roomId);

    if (roomIndex > -1) {
      rooms[roomIndex].users.push(user);
      rooms[roomIndex].activeUsers++;
    } else {
      roomIndex = rooms.length;
      rooms.push({
        id: roomId,
        activeUsers: 1,
        users: [user],
      });
    }

    updateRooms(roomIndex);
  });

  socket.on("blending", ({ roomId }) => {
    io.sockets.emit("blending", roomId)
  })

  socket.on("disconnect", () => {
    console.log("se disconecta")
    console.log({userId: socket.userId, roomId: socket.roomId})
    const roomIndex = rooms.findIndex((room) => room.id == socket.roomId);

    userIndex = rooms[roomIndex].users.findIndex((user) => user.id == socket.userId);

    rooms[roomIndex].users.splice(userIndex, 1);
    rooms[roomIndex].activeUsers--;
    
    updateRooms(roomIndex);
  });
  
  updateRooms = (roomIndex) => {
    const users = rooms[roomIndex].users.map((user) => (user.id));
    console.log({
      id: rooms[roomIndex].id,
      activeUsers: rooms[roomIndex].activeUsers,
      users,
    })

    io.sockets.emit("updateRoom", rooms[roomIndex]);
  };
});

server.listen(PORT, () => { });
