/* eslint-disable no-console */
import express from 'express';
import Sagawa from '../db/mongo/models/sagawa';
import Email from '../db/mongo/models/email';

const router = new express.Router();

/**
*                 CAUTION WIP
* This is sagawa Lambda that does the following:
* The task it does depends on the type of event source namely onDemand and cronJob
*
*/

router.post('/sagawa', (req, res) => {
  console.log('req.body: ', req.body);
  Sagawa.uploadOrderAndSendEmail(req.body)
    .then((response) => {
      console.log('SUCCEEDED: Upload Sagawa and Send Invoice Email.');
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log('FAILED: Upload Sagawa and Send Invoice Email: ', error);
      res.status(400).send(error);
    });
});

router.post('/email', (req, res) => {
  Email.createEmail(req.body)
    .then((response) => {
      console.log('SUCCEEDED: Upload Sagawa and Send Invoice Email.');
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log('FAILED: Upload Sagawa and Send Invoice Email: ', error);
      res.status(400).send(error);
    });
});

router.get('/tracking', (req, res) => {
  Sagawa.getTracking(req.body)
  .then((response) => {
    console.log((''));
  })
})

export default router;
