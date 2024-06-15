import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

let onlineUser = [];

const addUser = (userId, socketId) => {
  console.log("Adding user with ID:", userId, "and socket ID:", socketId);
  console.log("Current online users:", onlineUser);

  const userExits = onlineUser.find((user) => user.userId === userId);
  
  console.log("User exists:", userExits);

  if (!userExits && userId !=null) {
    onlineUser.push({ userId, socketId });
    console.log("User added. Updated online users:", onlineUser);
  } else {
    console.log("User already exists. No action taken.");
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  console.log('your user id ius '+ userId)
  console.log("Current online users:", onlineUser);

  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
    
  socket.on("newUser", (userId) => {
    console.log(userId + socket.id);
    addUser(userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    console.log(receiverId);
    const receiver = getUser(receiverId);
    console.log("receiver"+receiver)
    io.to(receiver.socketId).emit("getMessage", data);
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

io.listen("4000");