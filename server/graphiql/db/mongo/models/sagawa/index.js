/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
import axios from 'axios';
import moment from 'moment';
import JWT from 'jsonwebtoken';
import sagawaSchema from '../../schemas/sagawaSchema';
import db from '../../connection';
import Transaction from '../transaction';
import Email from '../email';
import {
  GetSagawaKbn,
  CleanSagawaResponse,
  GenerateItemsXml,
  GenerateAddressXml,
  GetNextBusinessDay,
  GetOrderWeight,
  GenerateItemObjs,
} from './helpers';

/**
* Function: "xmlOut";
* 1. Receives standard Javascript string
* 2. Replaces special characters with XML compliant syntax.
* 3. Returns the result.
*
* @param {string} postalCode - the postal code to validate.
*
* @return {string} cleaned
*/
const xmlOut = str => str
.replace(/&/g, '&amp;')
.replace(/</g, '&lt;')
.replace(/>/g, '&gt;')
.replace(/"/g, '');

/**
* Function: "validatePostal";
* Receives input argument object with "userId" & the "postalCode" to validate.  Sends info to Sagawa API for verification.  If verification is successful, the rsponse contains the Kanji formatted Japanese address respective to the Postal code input.  The result is then saved in a NEW Sagawa Mongo Document. The User ID responsible for the fetch, is also saved on the new document.  This method is called during the Checkout Process as soon as the user inputs a valid 7 digit Japanese postal code.
* 1. Receives standard Javascript string
* 2. Replaces special characters with XML compliant syntax.
* 3. Returns the result.
*
* @param {string} postalCode - the postal code to validate.
* @param {string} userId - the Mongo Object Id for the user.
*
* @return {object} - New Sagwa Document.
*/
sagawaSchema.statics.validatePostal = ({ postalCode }) =>
new Promise((resolve, reject) => {
  console.log('\n\n@Sagawa.validatePostal\n');

  axios.post('http://asp4.cj-soft.co.jp/SWebServiceComm/services/CommService/getAddr',
  `<?xml version='1.0' encoding='utf-8'?>
  <soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'  xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>
  <soap:Body>
    <getAddr xmlns='http://ws.com'>
    <zipcode>${xmlOut(postalCode)}</zipcode>
  </getAddr>
  </soap:body>
  </soap:Envelope>`, {
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      SOAPAction: 'http://ws.com',
    },
  })
  .then((response) => {
    console.log('SUCCEEDED: Sagawa validate postal');
    return CleanSagawaResponse.handlePostal(response);
  })
  .then(({ problem, data }) => { //eslint-disable-line
    console.log('SUCCEEDED: Cleaned validate postal response.', data);

    if (problem) {
      console.log('FAILED: Error while validating postal code', problem);
      reject({
        error: {
          hard: true,
          soft: false,
          message: problem,
        },
      });
    }
      // return bbPromise.fromCallback(cb => Sagawa.create({
      //   userId,
      //   postalInfo: data.postalInfo,
      // }, cb));
    resolve({
      error: {
        hard: false,
        soft: false,
        message: '',
      },
      postalInfo: { ...data.postalInfo },
    });
  })
  .catch((error) => {
    console.log('FAILED: Create new Sagawa Document: ', error);
    reject(new Error('FAILED: Create new Sagwa Document.'));
  });
});

/**
* Function: "handleNewTransaction";
* Called by the Transaction.submitFinalOrder function as a follow-on action.  Receives the orderInfo object.  Querying for all products in the users cart at the time of purchase.  Next, it maps the product information to the cart productId's, and then generates an inidividual item object for each product that will be used in a follow on action for dynamically generating XML strings used in the Sagawa.uploadOrder process.  Creates a new Sagawa document with this "udpatedCart" and all the shipping data.  Resolves with the new Sagawa document.
*
* @param {objecgt} orderInfo - All shipping, cart, total, and transaction information.
*
* @return {object} new Sagawa Document.
*/
sagawaSchema.statics.handleNewTransaction = orderInfo =>
new Promise((resolve, reject) => {
  console.log('\n\n@Sagawa.handleNewTransaction\n');

  const {
    cart,
    total,
    userId,
    sagawa,
    transactionId,
  } = orderInfo;

  bbPromise.fromCallback(cb => Sagawa.create({
    userId,
    transactionId,
    shippingAddress: {
      boxid: `NJ2JP${moment().format('YYYYMMDD')}`,
      shipdate: moment().format('YYYY/MM/DD'),
      customerName: `${sagawa.shippingAddress.familyName} ${sagawa.shippingAddress.givenName}`,
      postal: sagawa.shippingAddress.postalCode,
      jpaddress1: sagawa.shippingAddress.addressLine1,
      jpaddress2: sagawa.shippingAddress.addressLine2,
      phoneNumber: sagawa.shippingAddress.phoneNumber,
      kbn: GetSagawaKbn(sagawa.shippingAddress.country),
      wgt: GetOrderWeight(cart),
      grandTotal: total.subTotal,
      deliveryDate: GetNextBusinessDay(),
      deliveryTime: '1200',
      ttlAmount: total.subTotal,
    },
    items: [...GenerateItemObjs(cart)],
  }, cb))
  .then((dbSagawa) => {
    console.log('SUCCEEDED: Create Sagawa Document: ', dbSagawa);
    resolve(dbSagawa);
  })
  .catch((error) => {
    console.log('FAILED: Handle new Transaction on Sagawa Document: ', error);
    reject(new Error('\nFAILED: Handle new Transaction on Sagawa Document'));
  });
});

/**
* Function: "uploadOrder"
* Generates and sends customer's order details via XML HTTP reqeuest to Sagawa API.  This function call initiates the shipping fullfillment process to the customer.
*
* @param {string/ Mongo Object Id} sagawaId - documentId of sagawa document.

* @return {object} Promise resolved with Order AWB & REF id's.
*/
sagawaSchema.statics.uploadOrder = sagawaId =>
new Promise((resolve, reject) => {
  console.log('\n\n@Sagawa.updloadOrder\n');
  console.log('Sagawa ID: ', sagawaId);
  if (!sagawaId) {
    console.log('FAILED: Missing required arguments.');
    reject(new Error('FAILED: Missing required arguments.'));
  }

  Sagawa
  .findById(sagawaId)
  .exec()
  .then(sagawaDoc =>
    axios.post('http://asp4.cj-soft.co.jp/SWebServiceComm/services/CommService/uploadData',
    `<?xml version='1.0' encoding='utf-8'?>
    <soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'  xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>
    <soap:Body>
      <uploadFile xmlns='http://ws.com'>
      <handler>
        ${xmlOut('<DATA>')}
          ${xmlOut(GenerateAddressXml(sagawaDoc))}
          ${xmlOut(GenerateItemsXml(sagawaDoc))}
        ${xmlOut('</DATA>')}
      </handler>
      </uploadFile>
    </soap:body>
    </soap:Envelope>`, {
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        SOAPAction: 'http://ws.com',
      },
    }),
  )
  .then((response) => {
    console.log('SUCCEEDED: Sagawa order Upload: ', response.data);
    return CleanSagawaResponse.handleUpload(response);
  })
  .then(({ data }) => {
    console.log('SUCCEEDED: Extracted AWB & REF #\'s from Sagawa resposne: ', data);
    resolve(data);
  })
  .catch((error) => {
    console.log('FAILED: Order upload to Sagawa.', error);
    reject(new Error('FAILED: Order upload to Sagawa.'));
  });
});

/**
* Function: "findSagawaAndUpdate"
* Need to update the existing sagawa document with awbId and referenceId.
* This method is called after sending sagawa upload to sagawa shipment endpoint.
*
* @param {objectId} _id - documentId of sagawa document.
* @param {string} awbId - awbId(trackingId) of the uploaded sagawa order.
* @param {string} referenceId - referenceId of the uploaded sagawa order.

* @return {object} Promise resolved with updated Sagawa Document.
*/
sagawaSchema.statics.findSagawaAndUpdate = ({ sagawaId, awbId, referenceId }) =>
new Promise((resolve, reject) => {
  console.log('\n\n@Sagawa.findSagawaAndUpdate\n');

  Sagawa.findByIdAndUpdate(sagawaId, {
    $set: {
      'shippingAddress.awbId': awbId,
      'shippingAddress.referenceId': referenceId,
      status: 'uploaded',
    },
  }, { new: true })
    .then((updatedDoc) => {
      console.log('SUCCEEDED: Save AWB & REF #\'s to Document: ', updatedDoc);
      resolve(updatedDoc);
    })
    .catch((error) => {
      console.log('FAILED: Update Sagawa Doc with AWB & REF #\'s:', error);
      reject(new Error('FAILED: Update Sagawa Doc with AWB & REF #\'s.'));
    });
});

/**
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
sagawaSchema.statics.uploadOrderAndSendEmail = request =>
new Promise((resolve, reject) => {
  console.log('\n\n@Sagawa.uploadOrderAndSendEmail');

  console.log('req.body: ', request);

  const {
    userId,
    sagawaId,
    transactionId,
  } = request;

  let transactionDoc = {};
  let sagawaDoc = {};
  let emailBody = '';
  let emailType = '';

  Promise.all([
    Sagawa.uploadOrder(sagawaId),
    Transaction.findById(transactionId),
  ])
  .then((results) => {
    console.log('SUCCEEDED: 1)Upload Order to Sagawa.\n', results[0], '\n 2) Fetch Transaction Doc.\n', results[1]);

    transactionDoc = results[1];

    return Sagawa.findSagawaAndUpdate({
      sagawaId,
      awbId: sagawaDoc.awbId,
      referenceId: sagawaDoc.referenceId,
    });
  })
  .then((dbSagawa) => {
    console.log('SUCCEEDED: Update Sagawa Doc with AWB and REF #\'s.', dbSagawa.shippingAddress);

    sagawaDoc = dbSagawa;

    emailType = transactionDoc.invoiceEmail ? 'invoiceEmail' : 'invoiceEmailNoTracking';

    return Email.findEmailAndFilterLanguage(
      emailType,
      transactionDoc.emailLanguage,
    );
  })
  .then((dbEmail) => {
    console.log('SUCCEEDED: Find email and Filter by Language: ', dbEmail.purpose);

    const payload = {
      userId,
      sagawaId,
      exp: moment().add(1, 'w').unix(),
    };
    const {
      JWT_SECRET,
      LAMBDA_ENV,
      BASE_URL,
      PRODUCTION_URL,
    } = process.env;

    const token = JWT.sign(payload, JWT_SECRET);
    const tokenUrlString = `${LAMBDA_ENV === 'production' ? PRODUCTION_URL : BASE_URL}/tracking?token=${token}`;

    emailBody = transactionDoc.invoiceEmail || transactionDoc.invoiceEmailNoTracking;
    emailBody = emailBody
    .replace(/(TRACKING_TOKEN_LINK_HERE)+/g, tokenUrlString)
    .replace(/(ORDER_TRACKING_NUMBER_HERE)+/g, sagawaDoc.shippingAddress.awbId);

    return Email.sendEmail({
      to: transactionDoc.emailAddress,
      htmlBody: emailBody,
    }, dbEmail);
  })
  .then(() => {
    console.log('SUCCEEDED: Send Invoice Email via SES.\n');
    resolve();
  })
  .catch((error) => {
    console.log('FAILED: Upload order to Sagawa and Send Email: ', error);
    reject(new Error('FAILED: Upload order to Sagawa and Send Email.'));
  });
});

const Sagawa = db.model('Sagawa', sagawaSchema);
export default Sagawa;
