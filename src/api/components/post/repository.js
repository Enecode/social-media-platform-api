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
exports.getFeedForUser = exports.getPostsByUserId = exports.createPost = void 0;
// repository.ts
const model_1 = __importDefault(require("./model"));
function createPost(userId, text, image, video) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield model_1.default.create({ user: userId, text, image, video, likes: [], comments: [] });
    });
}
exports.createPost = createPost;
function getPostsByUserId(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield model_1.default.find({ user: userId }).populate('user', 'username');
    });
}
exports.getPostsByUserId = getPostsByUserId;
function getFeedForUser(userId, limit, page) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield model_1.default.find({ user: { $in: [userId, ...user.following] } })
            .sort({ createdAt: -1 })
            .limit(limit)
            .skip((page - 1) * limit)
            .populate('user', 'username');
    });
}
exports.getFeedForUser = getFeedForUser;
