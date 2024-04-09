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
exports.followUserService = void 0;
const model_1 = __importDefault(require("../../user/model"));
function followUserService(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userId, followUserId } = req.body;
        try {
            const user = yield model_1.default.findById(userId);
            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            const followUser = yield model_1.default.findById(followUserId);
            if (!followUser) {
                res.status(404).json({ message: 'User to follow not found' });
                return;
            }
            if (user.following.includes(followUserId)) {
                res.status(400).json({ message: 'User already followed' });
                return;
            }
            user.following.push(followUserId);
            yield user.save();
            res.status(200).json({ message: 'User followed successfully' });
        }
        catch (error) {
            console.error('Error following user:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
exports.followUserService = followUserService;
