const express = require("express");
const app=express();
const http= require("http");
const {Server}=require("socket.io");
const cors=require("cors");

app.use(cors());

const server=http.createServer(app);

const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000"
    }
  });

  io.on("connection",socket=>{
    socket.on('addmymess',(mess)=>{
      socket.broadcast.emit('givemess',mess,socket.id);
    })
  })
  
  server.listen(4000,()=>{
    console.log("server running at 4000 port");
  })