import mongoose, { Schema, Document } from 'mongoose';

export interface Post extends Document {
  user: string;
  text: string;
  image?: string;
  video?: string;
  likes: string[];
  comments: { user: string, text: string }[];
  createdAt: Date;
}

const postSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  image: { type: String },
  video: { type: String },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ user: { type: Schema.Types.ObjectId, ref: 'User' }, text: { type: String } }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<Post>('Post', postSchema);
