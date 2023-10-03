import express from "express";
import morgan from "morgan";
import cors from "cors";
import { CorsOptions } from 'vite';

const app = express();

const logger = morgan('dev');
const corsOptions: CorsOptions = {
  origin: 'http://localhost:3003',
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(logger);
app.use(cors(corsOptions));

app.get('/', (req, res) => res.send('Hello World'));

const PORT = 8000;
app.listen(PORT, () => console.log(`✅ Server Listening on port http://localhost:${PORT}`));