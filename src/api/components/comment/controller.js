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
exports.getCommentsForPostController = exports.createCommentController = void 0;
const repository_1 = require("./repository");
function createCommentController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userId, postId, text } = req.body;
        try {
            const comment = yield (0, repository_1.createComment)(userId, postId, text);
            res.status(201).json(comment);
        }
        catch (error) {
            console.error('Error creating comment:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
exports.createCommentController = createCommentController;
function getCommentsForPostController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const postId = req.params.postId;
        try {
            const comments = yield (0, repository_1.getCommentsForPost)(postId);
            res.status(200).json(comments);
        }
        catch (error) {
            console.error('Error fetching comments:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
exports.getCommentsForPostController = getCommentsForPostController;
