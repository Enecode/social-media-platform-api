import { Request } from 'express';

export function paginateResults(results: any[], page: number, limit: number): any[] {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedResults = results.slice(startIndex, endIndex);

  return paginatedResults;
}

export function getCurrentPage(req: Request): number {
  let page = parseInt(req.query.page as string);
  if (isNaN(page) || page < 1) {
    page = 1;
  }
  return page;
}

export function getLimit(req: Request): number {
  let limit = parseInt(req.query.limit as string);
  if (isNaN(limit) || limit < 1) {
    limit = 10; // default limit
  }
  return limit;
}
