import express from 'express';

export const userRouter = express.Router();

userRouter.get('/login', (req, res) => res.send('Hello World'));
userRouter.post('/login', (req, res) => {
  console.log('req test', req.body);
  return res.end();
});