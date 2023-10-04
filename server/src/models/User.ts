import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface UserDocument extends Document {
  email: string;
  username: string;
  password: string;
  name: string;
  location?: string;
}

const userSchema = new mongoose.Schema<UserDocument>({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: String,
});

userSchema.pre<UserDocument>('save', async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model('Users', userSchema);

export default User;
