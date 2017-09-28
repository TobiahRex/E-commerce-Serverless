/* eslint-disable no-console */
import express from 'express';
import Email from '../../db/mongo/models/email';

const router = new express.Router();

router.post('/createEmail', (req, res) => {
  Email.createEmail(req.body)
    .then((response) => {
      console.log('\nSUCCEEDED: Create New Email.');
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log('\nFAILED: Create New Email: ', error);
      res.status(400).send(error);
    });
});

router.post('/refundNotification', (req, res) => {
  Email.refundNotification(req.body)
  .then((response) => {
    console.log('\nSUCCEEDED: Send Refund notification.');
    res.status(200).send(response);
  })
  .catch((error) => {
    console.log('\nFAILED: Send Refund notification: ', error);
    res.status(400).send(error);
  });
});


export default router;
