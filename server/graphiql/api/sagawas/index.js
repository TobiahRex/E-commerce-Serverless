/* eslint-disable no-console */
import express from 'express';
import Sagawa from '../../db/mongo/models/sagawa';

const router = new express.Router();

router.post('/uploadOrderAndSendEmail', (req, res) => {
  console.log('req.body: ', req.body);
  Sagawa.uploadOrderAndSendEmail(req.body)
    .then((response) => {
      if (response.verified) {
        console.log('\nSUCCEEDED: Upload Sagawa and Send Invoice Email.');
        res.status(200).send(response);
      } else {
        console.log('\nFAILED: Order successfully uploaded but did not receive required tracking data.');
        res.status(204).send(response);
      }
    })
    .catch((error) => {
      console.log('\nFAILED: Upload Sagawa and Send Invoice Email: ', error);
      res.status(400).send(error);
    });
});

router.post('/cronjob', (req, res) => {
  Sagawa.cronJob()
    .then(() => res.status(200).send())
    .catch((error) => {
      console.log('\nFAILED: Upload Sagawa and Send Invoice Email: ', error);
      res.status(400).send(error);
    });
});

export default router;
