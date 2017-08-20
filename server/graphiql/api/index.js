import express from 'express';
import uploadSagawaAndSendEmail from './onDemand';

const router = new express.Router();

/**
*                 CAUTION WIP
* This is sagawa Lambda that does the following:
* The task it does depends on the type of event source namely onDemand and cronJob
*
*/

router.post('/sagawa', (req, res) => {
  console.log("inside sagawa route post");

  uploadSagawaAndSendEmail(req.body)
    .then((response) => {
      console.log("printing the response: ", response);
      res.send(response);
    })
    .catch((error) => {
      console.log("in main error");
      res.send(error);
    })
});

export default router;
