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
exports.getFeedService = void 0;
const repository_1 = require("../repository");
function getFeedService(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.params.userId;
        const { limit, page } = req.query;
        try {
            const posts = yield (0, repository_1.getFeedForUser)(userId, parseInt(limit), parseInt(page));
            res.status(200).json(posts);
        }
        catch (error) {
            console.error('Error fetching feed:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
exports.getFeedService = getFeedService;
