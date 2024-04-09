import express from 'express';
import { createCommentController, getCommentsForPostController } from './controller';

const router = express.Router();

router.post('/create', createCommentController);
router.get('/post/:postId', getCommentsForPostController);

export default router;
