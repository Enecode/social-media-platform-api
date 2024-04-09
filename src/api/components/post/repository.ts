import Post from './model';

export async function createPost(userId: string, text: string, image?: string, video?: string): Promise<Post> {
  return await Post.create({ user: userId, text, image, video, likes: [], comments: [] });
}

export async function getPostsByUserId(userId: string): Promise<Post[]> {
  return await Post.find({ user: userId }).populate('user', 'username');
}

export async function getFeedForUser(userId: string, limit: number, page: number): Promise<Post[]> {
  return await Post.find({ user: { $in: [userId, ...user.following] } })
                   .sort({ createdAt: -1 })
                   .limit(limit)
                   .skip((page - 1) * limit)
                   .populate('user', 'username');
}
