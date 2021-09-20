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

const io = socketIo(server,{
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const room = {
  id: undefined,
  activeUsers: 0,
  users: []
}

let rooms = [{}];

io.on("connection", (socket) => {
	console.log(socket.handshake.query.room)

  updateUsers = () => {
    io.sockets.emit("users", users);
  };
});

server.listen(PORT, () => {});
