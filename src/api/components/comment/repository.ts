import Comment from './model';

export async function createComment(userId: string, postId: string, text: string): Promise<Comment> {
  return await Comment.create({ user: userId, post: postId, text });
}

export async function getCommentsForPost(postId: string): Promise<Comment[]> {
  return await Comment.find({ post: postId }).populate('user', 'username');
}
