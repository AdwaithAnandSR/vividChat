import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
   const { username, password, email } = req.body;

   if (!username.trim() || !password.trim() || !email.trim())
      return res.status(400).json({
         message: "all fields are mandatory!",
         success: false
      });

   const existUser = await userModel.findOne({ username });
   if (existUser)
      return res.status(400).json({
         message: "user already exists!",
         success: false
      });

   const salt = await bcrypt.genSalt(10);
   const hashPass = await bcrypt.hash(password, salt);

   const user = await userModel.create({
      username,
      email,
      password: hashPass
   });

   console.log("user created successfully: ", user);

   return res.status(200).json({
      success: true,
      message: "authentication successfull",
      userId: user._id,
      username: user.username
   });
};

export const signin = async (req, res) => {
   const { username, password } = req.body;

   const user =await  userModel.findOne({ username });
   
   if (!user)
      return res.status(400).json({
         success: false,
         message: "incorrect username!"
      });

   const isPassMatch = await bcrypt.compare(password, user.password);

   if (!isPassMatch)
      return res.status(400).json({
         success: false,
         message: "incorrect password!"
      });

   return res.status(200).json({
      message: "authentication succesfull.",
      success: true,
      userId: user._id,
      username: user.username
   });
};
