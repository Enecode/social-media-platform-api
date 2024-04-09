import Like from './model';

export async function likePost(userId: string, postId: string): Promise<void> {
  await Like.create({ user: userId, post: postId });
}

export async function unlikePost(userId: string, postId: string): Promise<void> {
  await Like.deleteOne({ user: userId, post: postId });
}

export async function getLikesForPost(postId: string): Promise<Like[]> {
  return await Like.find({ post: postId }).populate('user', 'username');
}
