export default () =>
  (req, res, next) => {
    if (req.password !== process.env.TEST_API_PASSOWRD) return res.status(400).send('Unauthorized request');

    return next();
  };
