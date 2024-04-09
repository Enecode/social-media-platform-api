import express from 'express';
// import userRoutes from './api/components/user/routes';
// import postRoutes from './api/components/post/routes';
// import likeRoutes from './api/components/like/routes';
// import commentRoutes from './api/components/comment/routes';
// import notificationRoutes from './api/components/notification/routes';

// import userRoutes from './components/user/routes';
// import postRoutes from './components/post/routes';
// import likeRoutes from './components/like/routes';
import userRoutes from './components/user/routes';
import postRoutes from './components/post/routes';
import likeRoutes from './components/like/routes';
import commentRoutes from './components/comment/routes';
import notificationRoutes from './components/notification/routes';



const router = express.Router();

// User routes
router.use('/user', userRoutes);

// Post routes
router.use('/post', postRoutes);

// Like routes
router.use('/like', likeRoutes);

// Comment routes
router.use('/comment', commentRoutes);

// Notification routes
router.use('/notification', notificationRoutes);

export default router;
