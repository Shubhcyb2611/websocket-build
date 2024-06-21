import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";

const app = express();

const port = 8080;
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A new user has been added", socket.id);
});

app.use(express.static(path.resolve("../client")));

app.get("/", (req, res) => {
  return res.sendFile("../client/index.html");
});
server.listen(port, () => {
  console.log("server is listening");
});
