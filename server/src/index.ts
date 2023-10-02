import express from "express";
import morgan from "morgan";

const app = express();

const logger = morgan('dev');

app.use(logger);

const PORT = 8000;
app.listen(PORT, () => console.log(`✅ Server Listening on port http://localhost:${PORT}`));