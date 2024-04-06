import { Schema, model, models, Document, Model } from 'mongoose';

interface UserDocument extends Document {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName: string;
  lastName: string;
  planId: number;
  creditBalance: number;
}

interface UserModel extends Model<UserDocument> {}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  planId: { type: Number, required: true, default: 1 },
  creditBalance: { type: Number, required: true, default: 10 },
});

const User = models?.User as UserModel || model<UserDocument>('User', UserSchema);

export default User;