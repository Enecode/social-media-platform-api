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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const repository_1 = require("./repository");
const auth_1 = require("./services/auth");
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            // Check if user exists
            const user = yield (0, repository_1.getUserByEmail)(email);
            if (!user) {
                res.status(401).json({ message: 'Invalid email or password' });
                return;
            }
            // Validate password
            const validPassword = yield bcrypt_1.default.compare(password, user.password);
            if (!validPassword) {
                res.status(401).json({ message: 'Invalid email or password' });
                return;
            }
            // Generate JWT token
            const token = (0, auth_1.generateToken)(user);
            res.status(200).json({ token });
        }
        catch (error) {
            console.error('Error logging in user:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
exports.loginUser = loginUser;
