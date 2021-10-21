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

app.use(cors());

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
  const roomId = socket.handshake.query.room;

  let roomIndex = rooms.findIndex((el) => el.id == roomId);
  let userIndex = 0;
  let userId = ""

  socket.on("newUser", (e) => {
    userId = e.id;
    console.log(userId);
    if (roomIndex > -1) {
      userIndex = rooms[roomIndex].users.length;
      rooms[roomIndex].users.push(e);
      rooms[roomIndex].activeUsers++;
    } else {
      roomIndex = rooms.length;
      rooms.push({
        id: roomId,
        activeUsers: 1,
        users: [e],
      });
    }
    updateRooms();
  });

  socket.on("disconnect", () => {
    userIndex = rooms[roomIndex].users.findIndex((user) => user.id == userId)
    rooms[roomIndex].users.splice(userIndex, 1);
    rooms[roomIndex].activeUsers--;
    updateRooms();
  });

  updateRooms = () => {
    const users = rooms[roomIndex].users.map((user) => (user.id))
    console.log({
      id: rooms[roomIndex].id,
      activeUsers: rooms[roomIndex].activeUsers,
      users,
    })
    io.sockets.emit("updateRoom", rooms[roomIndex]);
  };
});

server.listen(PORT, () => {});
