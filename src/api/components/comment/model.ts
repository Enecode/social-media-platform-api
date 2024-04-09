import mongoose, { Schema, Document } from 'mongoose';

export interface Comment extends Document {
  user: string;
  post: string;
  text: string;
}

const commentSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  text: { type: String, required: true }
});

export default mongoose.model<Comment>('Comment', commentSchema);
