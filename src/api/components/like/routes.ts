import express from 'express';
import { likePostController, unlikePostController } from './controller';

const router = express.Router();

router.post('/like', likePostController);
router.post('/unlike', unlikePostController);

export default router;
