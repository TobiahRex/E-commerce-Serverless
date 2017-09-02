/* eslint-disable no-console */
import express from 'express';
import Contact from '../../db/mongo/models/contact';

const router = new express.Router();

router.post('/sendSupportMailAndNotifySlack', (req, res) => {
  console.log(req.body);

  Contact.sendSupportMailAndNotifySlack(req.body)
    .then((response) => {
      console.log('\nSUCCEEDED: MOCK Send SES email.');
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log('\nFAILED: Mock Send SES Contact: ', error);
      res.status(400).send(error);
    });
});

export default router;
