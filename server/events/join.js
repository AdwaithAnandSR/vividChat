const join = ({users, userId, socket}) => {
   try {
     const existIndex = users.findIndex(item => item.userId === userId);

   if (existIndex !== -1) {
      users[existIndex].id = socket.id;
   } else {
      users.push({ userId, id: socket.id });
   }
   } catch (error) {
     console.log(`ERROR: ${error} \n\t while adding user to users list`);
   }
};

export default join;
