import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "/public/index.html"));
});

io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    io.emit("message", message);
    console.log("A new user message : ", message);
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
