import express from 'express';

const router = new express.Router();

router.post('/sagawa', (req, res) => {
  console.log("inside sagawa route post");
  console.log(req.body);
  console.log(req.body.transactionId);
  console.log(req.body.sagawaId);
  console.log(req.body.userId);
  res.send({});
});

export default router;
