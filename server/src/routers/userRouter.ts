import express from 'express';
import User from '../models/User';

export const userRouter = express.Router();

userRouter.get('/login', (req, res) => res.send('Hello World'));
userRouter.post('/join', async (req, res) => {
  const { email, username, name, location, password, passwordConfirm } = req.body;

  try {
    const uniqueValidation = await User.exists({ $or: [ { username, email } ] });
    if (uniqueValidation) {
      return res.status(400).json({ message: 'username or email already exists' });
    }
    if (password !== passwordConfirm) {
      return res.status(400).json({ message: '입력한 password가 일치하지 않습니다.' });
    }

    await User.create({
      email,
      username,
      password,
      name,
      location,
    });
  } catch (err) {
    console.log(err);
  }

  return res.end();
});