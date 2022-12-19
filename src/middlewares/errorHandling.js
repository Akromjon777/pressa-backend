import NewError from "../errors/NewError.js"
export default (err, req, res, next) => {
  if (err instanceof NewError) {
    return res
      .status(err.status)
      .json({ status: err.status, message: err.message });
  }
  res.status(err.status).json({
    status: err.status,
    message: "InternalServerError",
  });
};
