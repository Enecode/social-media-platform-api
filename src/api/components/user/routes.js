"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes.ts
const express_1 = __importDefault(require("express"));
const register_1 = require("./services/register");
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.post('/register', register_1.registerUser);
router.post('/login', controller_1.loginUser);
exports.default = router;
