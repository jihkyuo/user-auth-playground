import express from "express";
import morgan from "morgan";
import cors from "cors";
import { CorsOptions } from 'vite';

// db
import './db';

// router
import { userRouter } from './routers/userRouter';

// schema
import './models/User';

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

export default app;