export function asyncMiddleware(fn) {
  return fn(req, res, next) {
    Promise.resolve(fn(req, res, next).catch(next));
  }
}