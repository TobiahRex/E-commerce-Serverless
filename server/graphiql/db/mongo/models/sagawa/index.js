/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
import axios from 'axios';
import moment from 'moment';
import JWT from 'jsonwebtoken';
import sagawaSchema from '../../schemas/sagawaSchema';
import db from '../../connection';
import Transaction from '../transaction';
import Email from '../email';
import User from '../user';
import Report from '../report';
import {
  getSagawaKbn as GetSagawaKbn,
  cleanSagawaResponse as CleanSagawaResponse,
  generateItemsXml as GenerateItemsXml,
  generateAddressXml as GenerateAddressXml,
  getDeliveryDay as GetDeliveryDay,
  getShippingDay as GetShippingDay,
  getOrderWeight as GetOrderWeight,
  generateItemObjs as GenerateItemObjs,
  uploadGenerator as UploadGenerator,
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
      boxid: `NJ${moment().format('YYMMDDHHSSSS')}`,
      shipdate: GetShippingDay(),
      customerName: `${sagawa.shippingAddress.familyName}, ${sagawa.shippingAddress.givenName}`,
      postal: sagawa.shippingAddress.postalCode,
      jpaddress1: sagawa.shippingAddress.addressLine1,
      jpaddress2: sagawa.shippingAddress.addressLine2,
      phoneNumber: sagawa.shippingAddress.phoneNumber,
      kbn: GetSagawaKbn(sagawa.shippingAddress.country),
      wgt: GetOrderWeight(cart),
      grandTotal: total.subTotal,
      deliveryDate: GetDeliveryDay(),
      deliveryTime: '1600',
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

  if (!sagawaId) {
    console.log('FAILED: Missing required arguments.');
    reject(new Error('FAILED: Missing required arguments.'));
  }
  console.log(`Find Sagawa doc by id: "${sagawaId}"`);

  Sagawa
  .findById(sagawaId)
  .then(sagawaDoc => { //eslint-disable-line
    if (!sagawaDoc) {
      console.log('FAILED: Find Sagawa document by id: ', sagawaId);
      reject(new Error('FAILED: Find Sagawa document by id'));
    } else {
      console.log('SUCCEEDED: Find Sagawa document by id: ', sagawaDoc._id);
      console.log('\nSending upload to Sagawa...\n');
      return axios.post(
        'http://asp4.cj-soft.co.jp/SWebServiceComm/services/CommService/uploadData',
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
    });
    }
  })
  .then((response) => {
    console.log('SUCCEEDED: Sagawa order Upload: ', response.data);
    return CleanSagawaResponse.handleUpload(response);
  })
  .then(({ data }) => {
    if (!data.verified) {
      console.log('FAILED: Clean Successful Sagawa Response: \n', data.errorMsg, '\n', data.msg);
      reject(new Error(data.msg));
    } else {
      console.log('SUCCEEDED: Extracted AWB & REF #\'s from Sagawa resposne: ', data);
      resolve({ data, sagawaId });
    }
  })
  .catch((error) => {
    console.log('FAILED: Upload Order to Sagawa.', error);
    reject(new Error('FAILED: Upload Order to Sagawa.'));
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
  console.log('sagawaId: ', sagawaId, '\nawbId: ', awbId, '\nreferenceId: ', referenceId);
  Sagawa.findByIdAndUpdate(sagawaId, {
    $set: {
      'shippingAddress.awbId': awbId,
      'shippingAddress.referenceId': referenceId,
      uploadStatus: 'uploaded',
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
  .then((results) => {  //eslint-disable-line
    if (!results[0].data.verified) {
      console.log('FAILED: Order was uploaded, but was not given required tracking information receipt: ', results[0].data);
      resolve({ verified: false, sagawaId });
    } else {
      console.log('SUCCEEDED: 1)Upload Order to Sagawa.\n', results[0], '\n 2) Fetch Transaction Doc.\n', results[1]);

      transactionDoc = results[1];
      const uploadData = results[0].data;

      return Sagawa.findSagawaAndUpdate({
        sagawaId,
        awbId: uploadData.awbId,
        referenceId: uploadData.referenceId,
      });
    }
  })
  .then((dbSagawa) => {
    console.log('SUCCEEDED: Update Sagawa Doc with AWB and REF #\'s.', dbSagawa.shippingAddress);

    sagawaDoc = dbSagawa;
    console.log('Updated Sagawa Doc: ', sagawaDoc);
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
      exp: moment().add(10, 'd').unix(),
    };
    const {
      JWT_SECRET,
      LAMBDA_ENV,
      BASE_URL,
      PRODUCTION_URL,
    } = process.env;

    const token = JWT.sign(payload, JWT_SECRET);
    const prodEnv = LAMBDA_ENV === 'production';
    const tokenUrlString = `${prodEnv ? PRODUCTION_URL : BASE_URL}/tracking?token=${token}`;

    emailBody = transactionDoc.invoiceEmail || transactionDoc.invoiceEmailNoTracking;
    emailBody = emailBody
    .replace(/(TRACKING_TOKEN_LINK_HERE)+/g, tokenUrlString)
    .replace(/(ORDER_TRACKING_NUMBER_HERE)+/g, sagawaDoc.shippingAddress.referenceId);
    console.log('NEW email body: ', emailBody);

    return Email.sendEmail({
      to: transactionDoc.emailAddress,
      htmlBody: emailBody,
    }, dbEmail);
  })
  .then(() => {
    console.log('SUCCEEDED: Send Invoice Email via SES.\n');
    resolve({ verified: true, sagawaId });
  })
  .catch((error) => {
    console.log('FAILED: Upload order to Sagawa and Send Email: ', error);
    reject(new Error('FAILED: Upload order to Sagawa and Send Email.'));
  });
});

sagawaSchema.statics.FetchTrackingInfo = token =>
new Promise((resolve, reject) => {
  console.log('\n\n@Sagawa.fetchTrackingInfo\n');

  let sagawaDoc = {};
  let userDoc = {};
  let transactionDoc = {};
  let responseObj = {};

  if (!token) {
    console.log('FAILED: Missing required arguments.');
    reject(new Error('FAILED: Missing required arguments.'));
  } else {
    bbPromise.fromCallback(cb => JWT.verify(token, process.env.JWT_SECRET, cb))
    .then((payload) => {
      console.log('SUCCEEDED: Extract payload from JWT token input.');
      console.log('\nPayload: ', payload);

      const today = Number(String(Date.now()).slice(0, 10));
      if (today > payload.exp) {
        console.log('FAILED: Token has expired.');
        resolve({
          error: {
            hard: false,
            soft: true,
            message: 'This tracking link has expired.',
          },
        });
      }
      return Promise.all([
        User
        .findById(payload.userId)
        .deepPopulate('shopping.transactions'),
        Sagawa
        .findById(payload.sagawaId)
        .exec(),
      ]);
    })
    .then((results) => {
      if (!results[0] || !results[1]) {
        console.log('FAILED: 1) Locate user by payload id: ', results[0], '2) Locate Sagawa document by payload id: ', results[1]);
        resolve({
          error: {
            hard: true,
            soft: false,
            message: 'This is an unauthorized request.  Contact support if you feel you\'ve received this message in error.',
          },
        });
      }

      userDoc = results[0]._doc;
      sagawaDoc = results[1]._doc;
      console.log('sagwaDoc: ', sagawaDoc);
      transactionDoc = userDoc.shopping.transactions.filter(({ sagawa }) => (String(sagawa) === String(sagawaDoc._id)))[0]._doc;

      if (!transactionDoc) {
        console.log('FAILED: Locate transaction document from User\'s transaction history.');
        return resolve({
          error: {
            hard: true,
            soft: false,
            message: 'This is an unauthorized request.  Contact support if you feel you\'ve received this message in error.',
          },
        });
      }

      const trackingNumber = sagawaDoc.shippingAddress.referenceId;

      return axios.get(`https://tracking.sagawa-sgx.com/sgx/xmltrack.asp?AWB=${trackingNumber}`);
    })
    .then((response) => {
      if (response.status !== 200) {
        console.log('FAILED: Request tracking info from Sagawa API: ', response.data);
        return resolve({
          error: {
            hard: true,
            soft: false,
            message: 'The appears to be a network error from our shipping provider.  Please try your request again later.  Apologies for the inconvenience.',
          },
        });
      }
      console.log('SUCCEEDED: Request tracking infor from Sagawa API.');
      return CleanSagawaResponse.handleTracking(response);
    })
    .then(({ error, data }) => {
      if (error) {
        console.log('FAILED: Parse Sagawa API response.', error, '\n', data);
        return resolve({
          error: {
            hard: true,
            soft: false,
            message: 'The tracking number used for your request has expired.  Please contact support if your purchase has not been delivered.',
          },
        });
      }

      console.log('SUCCEEDED: Parse Sagawa response.');
      responseObj = {
        error: {
          hard: false,
          soft: false,
          message: '',
        },
        shipDate: sagawaDoc.shippingAddress.shipdate,
        orderStatus: data.phase,
        trackingNumber: sagawaDoc.shippingAddress.referenceId,
        userName: `${userDoc.name.first} ${userDoc.name.last}`,
        orderId: transactionDoc._id,
        totalPaid: transactionDoc.square.charge.amount,
        trackingInfo: data.trackingInfo,
      };

      return Transaction.findByIdAndUpdate(transactionDoc._id, {
        $set: { shippingStatus: data.phase },
      }, { new: true });
    })
    .then(() => {
      console.log('SUCCEEDED: 1) Updated Transaction Doc with latest data. 2) Fetch Sagawa Tracking Info.');
      resolve(responseObj);
    })
    .catch((error) => {
      console.log('FAILED: Fetch Sagawa Tracking information.', error);
      reject(new Error('FAILED: Fetch Sagawa Tracking information.'));
    });
  }
});

/**
* Function: "cronJob"
* This function will be called using AWS Lambda CRON scheduling.  It will query for all Sagawa documents that have a status of "pending".  Create argument objects containing the necessary data to call "UploadGenerator".
The UploadGenerator instantiates a generator function, and asynchronously calls the Sagawa.uploadOrderAndSendEmail function in parallel with each argument object.  The array of pending promises is then yielded back to the generator and resolved.  The promise collection is iterated over, and for each one, evaluated as successful or faulty.  The result is saved in a new collection.  A while loop listens for the results array length, and once it matches the promises array length, calls Sagawa.handleUploadResults.  If the call was successful, the final cronJob resolve is called.
*
* @param none
*
* @return none
*/
sagawaSchema.statics.cronJob = () =>
new Promise((resolve, reject) => {
  console.log('\n\n@Sagawa.cronJob');

  const date = moment().format('YYYY/MM/DD');

  bbPromise.fromCallback(cb =>
    Sagawa.find({ status: 'pending' }, cb).exec())
  .then((dbResults) => {  //eslint-disable-line
    if (!dbResults.length) {
      resolve({ status: 200 });
      Report.createAndSendCronJobReport({ date, reports: [] });
    } else {
      console.log(`\nFound ${dbResults.length} docs waiting to be uploaded.\n`);
      const reqObjs = dbResults.map(dbDoc => ({
        sagawaId: dbDoc._id,
        userId: dbDoc.userId,
        transactionId: dbDoc.transactionId,
      }));
      return Sagawa.batchUploadOrders(reqObjs);
    }
  })
  .then(() => {
    console.log('\nSUCCEEDED: @Sagawa.cronJob >>> Sagawa.batchUploadOrders.');
    Report.createAndSendCronJobReport({ date });
  })
  .then(() => {
    console.log('\nSUCCEEDED: @Sagawa.cronJob >>> Report.createAndSendCronJobReport:');
    resolve();
  })
  .catch((error) => {
    console.log('\nFAILED: @Sagawa.cronJob: ', error);
    reject(new Error('\nFAILED: @Sagawa.cronJob'));
  });
});

/**
* Function: "handleUploadResults"
* This function receives an array of result objects from uploading to Sagawa.  Each object has a success key, with a boolean value.  A dynamic email is created and sent with the results from the upload. The same message is added to a slack message, and sent to the NJ2JP slack channel.
*
* @param {array} responseArray - array of objects
* @param {class} Email - A Mongo Model
*
* @return none -
*/
sagawaSchema.statics.handleUploadResults = responseArray =>
new Promise((resolve, reject) => {
  console.log('\n\n@Sagawa.handleUploadError\n');

  const results = responseArray.reduce((a, n) => {
    if (n.success) {
      a.successful.push(n.sagawaId);
      a.total += 1;
      return a;
    }
    a.failures.push(n.sagawaId);
    a.total += 1;
    return a;
  }, {
    successful: [],
    failures: [],
    total: 0,
  });

  const {
    CTO_EMAIL: cto,
    CEO_EMAIL: ceo,
    CDO_EMAIL: cdo,
    DISTRO_EMAIL: distro,
  } = process.env;

  /* eslint-disable prefer-template */

  const message = `
    SAGAWA UPLOAD REPORT - ${moment().format('LL')}:
    This is a report of any & all automatic order uploads.  These orders were accumulated over the weekend (off-business hours).

    // ---------------------- SUMMARY ---------------------- //

    TOTAL UPLOADS: ${results.total.length}

    SUCCESSFUL: ${results.successful.length}

    FAILED: ${results.failures.length}

    // ---------------- FAILED SAGAWA ID's ----------------- //

    ${!results.failures.length ? '' : results.failures.reduce((a, n, i) => ('\n' + (i + 1) + ') ' + n.sagawaId) + '\n', '')}

    // ---------------------------------------------------- //`;
  /* eslint-enable prefer-template */

  const emailRequest = {
    sourceEmail: 'NJ2JP Admin <admin@nj2jp.com>',
    toEmailAddresses: [ceo, cto, cdo, distro],
    replyToAddresses: ['admin@nj2jp.com'],
    bodyTextData: message,
    bodyTextCharset: 'utf8',
    subjectData: `SAGAWA UPLOAD REPORT - ${moment().format('LL')}`,
    subjectCharset: 'utf8',
  };

  Email.sendRawEmail(emailRequest)
  .then((response) => {
    console.log('SUCCEEDED: Email has been sent to NJ2JP leadership:', response);
    const slackWebhook = process.env.SLACK_SAGAWA_UPLOAD_WEBHOOK;
    const slackMessage = message;
    return Email.notifySlack(slackWebhook, slackMessage);
  })
  .then((slackResponse) => {
    console.log('SUCCEEDED: Notification to Slack Customer channel:', slackResponse);
    resolve();
  })
  .catch((error) => {
    console.log('FAILED: Send Sagawa Upload Error eMail and Notify Slack ', error);
    reject(new Error('FAILED: Send Sagawa Upload Error eMail and Notify Slack'));
  });
});

sagawaSchema.statics.cronJob2 = () =>
new Promise((resolve, reject) => {
  console.log('\n\n@Sagawa.cronJob');

  bbPromise.fromCallback(cb =>
    Sagawa.find({ status: 'pending' }, cb).exec())
  .then((dbResults) => {  //eslint-disable-line
    if (!dbResults.length) {
      resolve({ status: 200 });
    } else {
      console.log(`\nFound ${dbResults.length} docs waiting to be uploaded.\n`);
      const reqObjs = dbResults.map(dbDoc => ({
        sagawaId: dbDoc._id,
        userId: dbDoc.userId,
        transactionId: dbDoc.transactionId,
      }));
      return UploadGenerator(reqObjs, Sagawa);
    }
  })
  .then((Promises) => {
    console.log('Promises: ', Promises);
    let promiseArrayLength = 0;
    const resultsArray = [];

    Promises.forEach((promise, i, array) => {
      promiseArrayLength = array.length;
      promise
      .then(({ verified, sagawaId }) => { //eslint-disable-line
        console.log('SUCCESS: Upload order to Sagawa via Cron Job.');
        if (verified) {
          resultsArray.push({ success: true, sagawaId });
        } else {
          resultsArray.push({ success: false, sagawaId });
        }
      })
      .catch((error) => {
        console.log('FAILED: Upload order to Sagawa via Cron Job: ', error);
        reject(new Error(error));
      });
    });

    // while (true) { //eslint-disable-line
    //   if (resultsArray.length === promiseArrayLength) {
    //     console.log('hello.');
    //     Sagawa.handleUploadResults(resultsArray)
    //     .then(resolve)
    //     .catch(reject);
    //     break; //eslint-disable-line
    //   }
    //   console.log('nothing...');
    // }
  })
  .catch((error) => {
    console.log('FAILED: Perform Cron Job sagawa upload: ', error);
    reject(new Error('FAILED: Perform cron job sagawa upload.'));
  });
});

const Sagawa = db.model('Sagawa', sagawaSchema);
export default Sagawa;
