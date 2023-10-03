import express from "express";
import morgan from "morgan";
import cors from "cors";
import { CorsOptions } from 'vite';

import { userRouter } from "./routers/userRouter.js";
import mongoose from 'mongoose';

mongoose.connect(`mongodb://127.0.0.1:27017`);

const db = mongoose.connection;
db.on('error', (error) => console.log('DB Error', error));
db.once('open', () => console.log('✅ Connected To DB'));

const app = express();

const corsOptions: CorsOptions = {
  origin: 'http://localhost:3003',
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());

// route
app.use('/user', userRouter);

const PORT = 8000;
app.listen(PORT, () => console.log(`✅ Server Listening on port http://localhost:${PORT}`));