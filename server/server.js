import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

import mongoose from './config/mongodb.config.js';
import indexRoutes from './routes/index.js'
import debugRoutes from './routes/debug.js'
import authenticationRoutes from './routes/authentication.js'
import socketEvents from './controllers/socket.controller.js'

const app = express();
const server = http.createServer(app);
const io = new Server(server);

socketEvents(io);
app.use(express.json());
app.use(cors())

app.use('/', indexRoutes);
app.use('/auth', authenticationRoutes);
app.use('/debug', debugRoutes);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});