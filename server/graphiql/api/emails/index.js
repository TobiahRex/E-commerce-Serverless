/* eslint-disable no-console */
import express from 'express';
import Email from '../../db/mongo/models/email';

const router = new express.Router();

router.post('/createEmail', (req, res) => {
  Email.createEmail(req.body)
    .then((response) => {
      console.log('\nSUCCEEDED: Upload Email and Send Invoice Email.');
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log('\nFAILED: Upload Email and Send Invoice Email: ', error);
      res.status(400).send(error);
    });
});


export default router;
