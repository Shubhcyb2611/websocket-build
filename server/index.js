import express from "express";

import { WebSocket } from "ws";

const app = express();

const port = 8080;

const server = app.listen(port, () => {
  console.log("server is listening...");
});

const wss = new WebSocket("ws://localhost:8080/");

// wss.on("open", (ws) => {
//   ws.on("message", (data) => {
//     console.log("data from server : ", data);
//     ws.send("thanks dear !!");
//   });
// });
