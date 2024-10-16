import mongoose from "mongoose";

const chatSchema = mongoose.Schema(
   {
      chatId: {
         type: String,
         required: true
      },
      participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
      messages: [
         {
            message: {
               type: String,
               required: true
            },
            sender: {
               type: String,
               required: true
            },
            receiver: {
               type: String,
               required: true
            },
            status: {
               type: String,
               enum: ["sent", "delivered", "read"],
               default: "sent"
            },
            createdAt: {
               type: Date,
               default: Date.now
            }
         }
      ]
   },
   { timestamps: true }
);

export default mongoose.model("chat", chatSchema);
