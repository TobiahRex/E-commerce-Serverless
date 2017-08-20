import express from 'express';
import Sagawa from '../db/mongo/models/sagawa';

const router = new express.Router();

/**
*                 CAUTION WIP
* This is sagawa Lambda that does the following:
* Get transactionId, userId, sagawaId, emailTemplateId
* Retrieve sagawa document using sagawaId
* Call the helper methods in the mongo models (helper/ directory) to construct the XML version of the request body.
* POST the Sagawa body to sagawa endpoint (You will receive the tracking number) || Retrieve the emailWithTrackingInfo and emailID from transaction collection
* Update the sagawa document with awbID and referenceID || replace the TRACKING_INFO string with userID + tracking number received from sagawa POST
* Retrieve SES requirements for sending mail from emailTemplate collection
* Send SES email
* Update the emailTemplate document with messageID
*
*/

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
