import userModel from "../models/userModel.js";
import chatModel from "../models/chatModel.js";

import join from "../events/join.js";
import getUser from "../events/getUser.js";
import getAllUsers from "../events/getAllUsers.js";
import getUserChats from "../events/getUserChats.js";
import getChatMessages from "../events/getChatMessages.js";

const users = [];

export default function (io) {
   io.on("connection", socket => {
      socket.on("join", userId => join({ users, userId, socket }));

      socket.on("getUser", userId => getUser({ userId, socket, userModel }));

      socket.on("getAllUsers", (page, limit) =>
         getAllUsers({ socket, userModel, page, limit })
      );

      socket.on("getUserChats", userId =>
         getUserChats({ userId, socket, userModel })
      );

      socket.on("getChatMessages", (chatId, page, limit) =>
         getChatMessages({ socket, chatModel, chatId, page, limit })
      );
      
      
      
   });
}
