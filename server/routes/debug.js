import express from 'express';
const router = express.Router()

import userModel from '../models/userModel.js'
import chatModel from '../models/chatModel.js'

router.get('/users', async (req, res)=>{
   const users = await userModel.find({})
   res.send(users)
})

router.get('/chats', async (req, res)=>{
   const chats = await chatModel.find({})
   res.send(chats)
})

export default router;