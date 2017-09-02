/* eslint-disable */
export default (req, res, next) => {
  if (req.body.password !== process.env.TEST_API_PASSWORD) {
    return res.status(400).send('Unauthorized request');
  }
  return next();
};
