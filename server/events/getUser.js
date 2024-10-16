const getUser = async ({ userId, socket, userModel }) => {
   try {
      const user = await userModel.findOne({ _id: userId });
      if (user) socket.emit("getUserRes", user);
   } catch (error) {
      console.log("error while fetch user details: ", error);
      socket.emit("getUserRes", {
         message: "error while fetch user details",
         error
      });
   }
};

export default getUser;
