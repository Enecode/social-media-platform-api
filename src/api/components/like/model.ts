import mongoose, { Schema, Document } from 'mongoose';

export interface Like extends Document {
  user: string;
  post: string;
}

const likeSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post', required: true }
});

export default mongoose.model<Like>('Like', likeSchema);
