import NewError from "../errors/NewError.js"
export default (req, res, next) => {
  let { username, password } = req.body;
  if (req.url == "/login") {
    if (![username, password].every(Boolean)) {
      return next(NewError.unauthorized("Wrong try to login"));
    }
  }
  return next();
};
