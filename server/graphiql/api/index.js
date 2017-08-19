import express from 'express';
import Sagawa from '../db/mongo/models/sagawa';

const router = new express.Router();

router.post('/sagawa', (req, res) => {
  console.log("inside sagawa route post");
  console.log(req.body);
  console.log(req.body.transactionId);
  console.log(req.body.sagawaId);
  console.log(req.body.userId);

  Sagawa.orderUpload(req.body.sagawaId)
    .then((apiResponse) => {
      console.log("in main then");
      console.log(apiResponse);
      res.send({});
    })
    .catch((error) => {
      console.log("in main error");
      res.send(error)
    })
});

export default router;
