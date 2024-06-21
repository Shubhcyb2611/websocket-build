import express from "express";
import http from "http";
import { WebSocket } from "ws";

const app = express();

const port = 8080;

const server = http.createServer(app);

app.use(express.static("/client"));

server.listen(posrt, () => {
  console.log("server is listening");
});
const wss = new WebSocket("ws://localhost:8080/");

// wss.on("open", (ws) => {
//   ws.on("message", (data) => {
//     console.log("data from server : ", data);
//     ws.send("thanks dear !!");
//   });
// });
