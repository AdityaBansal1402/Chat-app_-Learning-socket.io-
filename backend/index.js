const io = new Server({
    cors: {
      origin: "http://localhost:3000"
    }
  });
  
  io.listen(4000);