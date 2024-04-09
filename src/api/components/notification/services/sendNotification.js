"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNotification = void

const ws_1 = __importDefault(require("ws"));
const wss = new ws_1.default.Server({ port: 8080 }); // Example port, adjust as needed
function sendNotification(userId, notification) {
    wss.clients.forEach(client => {
        if (client.userId === userId && client.readyState === ws_1.default.OPEN) {
            client.send(JSON.stringify(notification));
        }
    });
}
exports.sendNotification = sendNotification;
