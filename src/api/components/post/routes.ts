import express from 'express';
import { createPost, getUserPosts, getFeed } from './controller';

const router = express.Router();

router.post('/', createPost);
router.get('/user/:userId', getUserPosts);
router.get('/feed/:userId', getFeed);

export default router;
