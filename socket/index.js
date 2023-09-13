const { Server } = require("socket.io");

const io = new Server({ cors: "*" });

let onlineUsers = [];
io.on("connection", (socket) => {
  console.log(socket.connected)
  console.log("new connection", socket.id);

  //listen to a connection

  socket.on("addNewUser", (userId) => {
    !onlineUsers.some(user => user.userId === userId) && 
    onlineUsers.push({
        userId,
        socketId: socket.id,
    })
    io.emit("userOnline", onlineUsers)
    console.log(onlineUsers);
  })

  //send message
  socket.on("sendMessage", (message) => {
    const user = onlineUsers.find((user) => user.userId === message.ReceiveId);
    if(user) {
      console.log(message);
      io.to(user.socketId).emit("getMessage", message);
      io.to(user.socketId).emit("getNotification", {
        senderId: message.senderId,
        isRead: false
      });
    }
  })

  socket.on("getMessage", (message) => {
    console.log(message);
  })

  //disconnect status user
  socket.on("disconnect", () =>{
    console.log(socket.id);
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id)
    io.emit("userOnline", onlineUsers)
  })
});

io.listen(3000);