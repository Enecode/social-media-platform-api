import { Request, Response } from 'express';
import { likePost } from '../repository';

export async function likePostService(req: Request, res: Response): Promise<void> {
  const { userId, postId } = req.body;

  try {
    await likePost(userId, postId);
    res.status(200).json({ message: 'Post liked successfully' });
  } catch (error) {
    console.error('Error liking post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
