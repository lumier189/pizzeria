// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  console.error(err);
  return res
    .status(err.httpCode ?? 500)
    .json({ message: err.message ?? 'Unexpected error.' });
};
