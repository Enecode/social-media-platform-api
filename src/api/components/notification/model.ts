import mongoose, { Schema, Document } from 'mongoose';

export interface Notification extends Document {
  user: string;
  message: string;
  createdAt: Date;
}

const notificationSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<Notification>('Notification', notificationSchema);
