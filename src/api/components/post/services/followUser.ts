import { Request, Response } from 'express';
import User from '../../user/model';

export async function followUserService(req: Request, res: Response): Promise<void> {
  const { userId, followUserId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const followUser = await User.findById(followUserId);
    if (!followUser) {
      res.status(404).json({ message: 'User to follow not found' });
      return;
    }

    if (user.following.includes(followUserId)) {
      res.status(400).json({ message: 'User already followed' });
      return;
    }

    user.following.push(followUserId);
    await user.save();

    res.status(200).json({ message: 'User followed successfully' });
  } catch (error) {
    console.error('Error following user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
