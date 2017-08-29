/* eslint-disable no-console */
import express from 'express';
import Sagawa from '../db/mongo/models/sagawa';
import Email from '../db/mongo/models/email';
import Contact from '../db/mongo/models/contact';

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

router.post('/email', (req, res) => {
  Email.createEmail(req.body)
    .then((response) => {
      console.log('\nSUCCEEDED: Upload Sagawa and Send Invoice Email.');
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log('\nFAILED: Upload Sagawa and Send Invoice Email: ', error);
      res.status(400).send(error);
    });
});

router.post('/contact', (req, res) => {
  console.log(req.body);

  Contact.sendSupportMailAndNotifySlack(req.body)
    .then((response) => {
      console.log('\nSUCCEEDED: MOCK Send SES email.');
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log('\nFAILED: Mock Send SES Email: ', error);
      res.status(400).send(error);
    });
});

export default router;
