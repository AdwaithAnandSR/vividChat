import express from 'express';
const router = express.Router()

router.get('/',(req, res)=>{
   res.send('helooee from server.')
})

router.get('/health', (req, res)=>{
   return res.status(200).json({success: true})
})

export default router;