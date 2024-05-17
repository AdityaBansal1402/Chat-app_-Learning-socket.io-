io=require("socket.io")(5000,{
    cors:{
        origin:['http://localhost:3000']
    }
})

io.on('Connection', socket=>{
    console.log(socket.id);
})