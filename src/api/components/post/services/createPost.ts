import { Request, Response } from 'express';
import { createPost } from '../repository';

export async function createPostService(req: Request, res: Response): Promise<void> {
  const { userId, text, image, video } = req.body;

  try {
    const post = await createPost(userId, text, image, video);
    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
