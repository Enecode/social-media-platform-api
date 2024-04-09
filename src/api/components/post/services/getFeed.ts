import { Request, Response } from 'express';
import { getFeedForUser } from '../repository';

export async function getFeedService(req: Request, res: Response): Promise<void> {
  const userId = req.params.userId;
  const { limit, page } = req.query;

  try {
    const posts = await getFeedForUser(userId, parseInt(limit as string), parseInt(page as string));
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching feed:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
