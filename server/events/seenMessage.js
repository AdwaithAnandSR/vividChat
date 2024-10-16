const seenMessage = async ({ socket, io, users, chatModel, chatId }) => {
   await chatModel.updateMany(
      {
         chatId
      },
      {
         $set: {
            messages.status = 'read'
         }
      }
      
   )
};

export default seenMessage