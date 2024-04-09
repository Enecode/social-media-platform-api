"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLimit = exports.getCurrentPage = exports.paginateResults = void 0;
function paginateResults(results, page, limit) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedResults = results.slice(startIndex, endIndex);
    return paginatedResults;
}
exports.paginateResults = paginateResults;
function getCurrentPage(req) {
    let page = parseInt(req.query.page);
    if (isNaN(page) || page < 1) {
        page = 1;
    }
    return page;
}
exports.getCurrentPage = getCurrentPage;
function getLimit(req) {
    let limit = parseInt(req.query.limit);
    if (isNaN(limit) || limit < 1) {
        limit = 10; // default limit
    }
    return limit;
}
exports.getLimit = getLimit;
