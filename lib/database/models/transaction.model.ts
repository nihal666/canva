import { Schema, model, models, Document, Model, Types } from 'mongoose';

interface TransactionDocument extends Document {
  createdAt: Date;
  stripeId: string;
  amount: number;
  plan?: string;
  credits?: number;
  buyer: Types.ObjectId;
}

interface TransactionModel extends Model<TransactionDocument> {}

const TransactionSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
  },
  credits: {
    type: Number,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Transaction = models?.Transaction as TransactionModel || model<TransactionDocument>('Transaction', TransactionSchema);

export default Transaction;