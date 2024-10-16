const getAllUsers = async ({ socket, userModel, page = 1, limit = 10 }) => {
   try {
      const skip = (page - 1) * limit;
      const users = await userModel.find({}).skip(skip).limit(10);
      if (users) socket.emit("getAllUsersRes", users);
   } catch (error) {
      console.log("error while fetching all usersList: ", error);
      socket.emit("getAllUsersRes", {
         message: "error while fetching all usersList",
         error
      });
   }
};

export default getAllUsers;
