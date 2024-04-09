import { Request, Response } from 'express';
import { createComment } from '../repository';

export async function commentPostService(req: Request, res: Response): Promise<void> {
  const { userId, postId, text } = req.body;

  try {
    const comment = await createComment(userId, postId, text);
    res.status(201).json(comment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
