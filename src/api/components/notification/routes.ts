import express from 'express';
import { createNotificationController, getNotificationsForUserController } from './controller';

const router = express.Router();

router.post('/create', createNotificationController);
router.get('/user/:userId', getNotificationsForUserController);

export default router;
