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
exports.getLikesForPost = exports.unlikePost = exports.likePost = void 0;

const model_1 = __importDefault(require("./model"));
function likePost(userId, postId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield model_1.default.create({ user: userId, post: postId });
    });
}
exports.likePost = likePost;
function unlikePost(userId, postId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield model_1.default.deleteOne({ user: userId, post: postId });
    });
}
exports.unlikePost = unlikePost;
function getLikesForPost(postId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield model_1.default.find({ post: postId }).populate('user', 'username');
    });
}
exports.getLikesForPost = getLikesForPost;
