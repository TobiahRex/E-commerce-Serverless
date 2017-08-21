/* eslint-disable no-console */
import express from 'express';
import Sagawa from '../db/mongo/models/sagawa';

const router = new express.Router();

/**
*                 CAUTION WIP
* This is sagawa Lambda that does the following:
* The task it does depends on the type of event source namely onDemand and cronJob
*
*/

router.post('/sagawa', (req, res) => {

  if(req.body.eventSource === 'onDemand') {
    Sagawa.uploadOrderAndSendEmail(req.body)
      .then((response) => {
        console.log('SUCCEEDED: Upload Sagawa and Send Invoice Email.');
        res.status(200).send(response);
      })
      .catch((error) => {
        console.log('FAILED: Upload Sagawa and Send Invoice Email: ', error);
        res.status(400).send(error);
      });
  } else {
    Sagawa.findSagawaByStatus('uploaded')
      .then((sagawaDocs) => {
        console.log('SUCCEEDED: Retrieved Sagawa documents with matching status.');
        res.status(200).send(sagawaDocs);
      })
      .catch((error) => {
        console.log('FAILED: Retrieved Sagawa documents with matching status: ', error);
        res.status(400).send(error);
      });
  }
});

export default router;
