const getChatMessages = async ({
   socket,
   chatModel,
   chatId,
   page = 1,
   limit = 10
}) => {
   try {
      const skip = (page - 1) * limit;
      const chat = await chatModel
         .findOne({ chatId })
         .select("messages")
         .sort("messages.createdAt")
         .skip(skip)
         .limit(10)
         .exec();

      console.log("chat messages: ", chat);

      if (chat) socket.emit("getChatMessagesRes", { chat, chatId });
   } catch (error) {
      console.log('error on fetching chat messages: ', error);
      socket.emit("getChatMessagesRes", { message: 'error occurred while fetching chat messages', error });
   }
};

export default getChatMessages;
