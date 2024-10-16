const getUserChats = async ({ userId, socket, userModel }) => {
   try {
      const user = await userModel
         .findOne({ _id: userId })
         .populate("chatList");
      if (user) socket.emit("getUserChatsRes", user.chatList);
   } catch (error) {
      console.log("error while fetching user chats: ", error);
      socket.emit("getUserChatsRes", {
         message: "error while fetching user chats",
         error
      });
   }
};

export default getUserChats;
