"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotificationsForUserController = exports.createNotificationController = void 0;
const repository_1 = require("./repository");
const sendNotification_1 = require("./services/sendNotification");
function createNotificationController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userId, message } = req.body;
        try {
            const notification = yield (0, repository_1.createNotification)(userId, message);
            // Send real-time notification
            (0, sendNotification_1.sendNotification)(userId, notification);
            res.status(201).json(notification);
        }
        catch (error) {
            console.error('Error creating notification:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
exports.createNotificationController = createNotificationController;
function getNotificationsForUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.params.userId;
        try {
            const notifications = yield (0, repository_1.getNotificationsForUser)(userId);
            res.status(200).json(notifications);
        }
        catch (error) {
            console.error('Error fetching notifications:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
exports.getNotificationsForUserController = getNotificationsForUserController;
