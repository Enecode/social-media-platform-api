"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes.ts
const express_1 = __importDefault(require("express"));
// import userRoutes from './api/components/user/routes';
// import postRoutes from './api/components/post/routes';
// import likeRoutes from './api/components/like/routes';
// import commentRoutes from './api/components/comment/routes';
// import notificationRoutes from './api/components/notification/routes';
// import userRoutes from './components/user/routes';
// import postRoutes from './components/post/routes';
// import likeRoutes from './components/like/routes';
const routes_1 = __importDefault(require("./components/user/routes"));
const routes_2 = __importDefault(require("./components/post/routes"));
const routes_3 = __importDefault(require("./components/like/routes"));
const routes_4 = __importDefault(require("./components/comment/routes"));
const routes_5 = __importDefault(require("./components/notification/routes"));
const router = express_1.default.Router();
// User routes
router.use('/user', routes_1.default);
// Post routes
router.use('/post', routes_2.default);
// Like routes
router.use('/like', routes_3.default);
// Comment routes
router.use('/comment', routes_4.default);
// Notification routes
router.use('/notification', routes_5.default);
exports.default = router;
