import { Request, Response } from 'express';
import { createPost, getPostsByUserId, getFeedForUser } from './repository';

export async function createPost(req: Request, res: Response): Promise<void> {
  const { userId, text, image, video } = req.body;

  try {
    const post = await createPost(userId, text, image, video);
    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function getUserPosts(req: Request, res: Response): Promise<void> {
  const userId = req.params.userId;

  try {
    const posts = await getPostsByUserId(userId);
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching user posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function getFeed(req: Request, res: Response): Promise<void> {
  const userId = req.params.userId;
  const { limit, page } = req.query;

  try {
    const posts = await getFeedForUser(userId, parseInt(limit), parseInt(page));
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching feed:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
