/* eslint-disable no-console */
import Sagawa from '../db/mongo/models/sagawa';
import Transaction from '../db/mongo/models/transaction';

/**
*                 CAUTION WIP
* Function: 'uploadSagawaAndSendEmail'
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
* @param {object} request - Object conatining the transactionId, userId, sagawaId, emailTemplateId.
*
* @return {object} Promise resolved with updated Sagawa Document. [WIP]
*/

const uploadSagawaAndSendEmail = request =>
new Promise((resolve, reject) => {
  console.log('\n\n@Sagawa.uploadSagawaAndSendEmail');

  const {
    transactionId,
    userId,
    sagawaId,
    emailTemplateId,
  } = request;

  Promise.all([
    Transaction.findById(transactionId),
    Sagawa.orderUpload(sagawaId),
  ])
  .then((results) => {
    console.log('Success 1.Sagawa uploaded the order to shipment endpoint  2.Retrieved emailWithTrackingInfo and emailID from transaction collection');

    const sagawaResponse = results[0];
    const transactionResponse = results[1];

    console.log('Sagawa Response:  ', sagawaResponse);
    console.log('Transaction Response:  ', transactionResponse);

    return Sagawa.findSagawaAndUpdate(sagawaId, sagawaResponse.awbId, sagawaResponse.referenceId);
  })
  .then((sagawaUpdatedDoc) => {
    console.log('Success!! updated sagawa document with awbId and referenceId');
    console.log('sagawa Updated Document:  ', sagawaUpdatedDoc);
    resolve(sagawaUpdatedDoc);
  })
  .catch((error) => {
    console.log('Error in sagawa upload or transaction retrieve: ', error);
    reject(error);
  })
});

export default uploadSagawaAndSendEmail;
