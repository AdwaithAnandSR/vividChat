const sendMessage = async ({ socket, io, users, chat, chatModel }) => {
   const { message, sender, receiver, tempId, chatId } = chat;
   
   //const chat = await chatModel.updateOne({chatId})
   socket.emit('sendMessage', {chatId, tempId})
   
   const receiverSocket = users.find(item=> item.userId === receiver)
   if (receiverSocket) {
      io.to(receiverSocket.id).emit('receiveMessage', {chat, chatId})
   }
   
};

export default sendMessage