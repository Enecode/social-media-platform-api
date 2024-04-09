import { Request, Response } from 'express';
import { createComment, getCommentsForPost } from './repository';

export async function createCommentController(req: Request, res: Response): Promise<void> {
  const { userId, postId, text } = req.body;

  try {
    const comment = await createComment(userId, postId, text);
    res.status(201).json(comment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function getCommentsForPostController(req: Request, res: Response): Promise<void> {
  const postId = req.params.postId;

  try {
    const comments = await getCommentsForPost(postId);
    res.status(200).json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
