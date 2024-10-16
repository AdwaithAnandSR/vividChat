import mongoose from "mongoose";

const userSchema = mongoose.Schema(
   {
      username: {
         type: String,
         required: true
      },
      email: {
         type: String,
         required: true
      },
      password: {
         type: String,
         required: true
      },
      avatar: String,
      chatList: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'chat'
         }
      ],
      role: {
         type: String,
         enum: ["user", "admin"],
         default: "user"
      }
   },
   { timestamps: true }
);

export default mongoose.model("user", userSchema);
