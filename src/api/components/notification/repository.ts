import Notification from './model';

export async function createNotification(userId: string, message: string): Promise<Notification> {
  return await Notification.create({ user: userId, message });
}

export async function getNotificationsForUser(userId: string): Promise<Notification[]> {
  return await Notification.find({ user: userId }).sort({ createdAt: -1 }).limit(10);
}
