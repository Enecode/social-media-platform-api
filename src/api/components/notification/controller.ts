import { Request, Response } from 'express';
import { createNotification, getNotificationsForUser } from './repository';
import { sendNotification } from './services/sendNotification';

export async function createNotificationController(req: Request, res: Response): Promise<void> {
  const { userId, message } = req.body;

  try {
    const notification = await createNotification(userId, message);
    
    // Send real-time notification
    sendNotification(userId, notification);

    res.status(201).json(notification);
  } catch (error) {
    console.error('Error creating notification:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function getNotificationsForUserController(req: Request, res: Response): Promise<void> {
  const userId = req.params.userId;

  try {
    const notifications = await getNotificationsForUser(userId);
    res.status(200).json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
