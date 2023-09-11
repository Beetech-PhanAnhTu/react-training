const { Server } = require("socket.io");

const io = new Server({ cors: "http://localhost:3001" });

let onlineUsers = [];
io.on("connection", (socket) => {
  console.log("new connection", socket.id);

  //listen to a connection

  socket.on("addNewUser", (userId) => {
    !onlineUsers.some(user => user.userId === userId) && 
    onlineUsers.push({
        userId,
        socketId: socket.id,
    })

    console.log(onlineUsers);
  })

  //send message
  socket.on("sendMessage", (message) => {
    const user = onlineUsers.find((user) => user.userId === message.ReceiveId);
    if(user) {
      console.log(message);
        io.to(user.socketId).emit("getMessage", message);
    }
  })
});

io.listen(3000);