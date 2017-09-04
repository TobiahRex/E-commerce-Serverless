/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
import axios from 'axios';
import moment from 'moment';
import JWT from 'jsonwebtoken';
import sagawaSchema from '../../schemas/sagawaSchema';
import {
  getSagawaKbn as GetSagawaKbn,
  cleanSagawaResponse as CleanSagawaResponse,
  generateItemsXml as GenerateItemsXml,
  generateAddressXml as GenerateAddressXml,
  getDeliveryDay as GetDeliveryDay,
  getShippingDay as GetShippingDay,
  getOrderWeight as GetOrderWeight,
  generateItemObjs as GenerateItemObjs,
} from './helpers';

export default (db) => {
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
      console.log('\nSUCCEEDED: @Sagawa.validatePostal >>> axios.post');
      return CleanSagawaResponse.handlePostal(response);
    })
    .then(({ problem, data }) => { //eslint-disable-line
      if (problem) {
        console.log('\nFAILED: @Sagawa.validatePostal >>> CleanSagawaResponse.handlePostal', problem);
        resolve({
          error: {
            hard: true,
            soft: false,
            message: problem,
          },
        });
      } else {
        console.log('\nSUCCEEDED: @Sagawa.validatePostal >>> CleanSagawaResponse.handlePostal');
        resolve({
          error: {
            hard: false,
            soft: false,
            message: '',
          },
          postalInfo: { ...data.postalInfo },
        });
      }
    })
    .catch((error) => {
      console.log('\nFAILED: Create new Sagawa Document: ', error);
      reject('\nFAILED: Create new Sagwa Document.');
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
      console.log('\nSUCCEEDED: Create Sagawa Document: ', dbSagawa);
      resolve(dbSagawa);
    })
    .catch((error) => {
      console.log('\nFAILED: Handle new Transaction on Sagawa Document: ', error);
      reject('\nFAILED: Handle new Transaction on Sagawa Document');
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
      console.log('\nSUCCEEDED: Save AWB & REF #\'s to Document: ', updatedDoc);
      resolve(updatedDoc);
    })
    .catch((error) => {
      console.log('\nFAILED: Update Sagawa Doc with AWB & REF #\'s:', error);
      reject('\nFAILED: Update Sagawa Doc with AWB & REF #\'s.');
    });
  });

  sagawaSchema.statics.fetchTrackingInfo = (token, User, Transaction) =>
  new Promise((resolve, reject) => {
    console.log('\n\n@Sagawa.fetchTrackingInfo\n');

    let sagawaDoc = {};
    let userDoc = {};
    let transactionDoc = {};
    let responseObj = {};

    if (!token) {
      console.log('\nFAILED: Missing required arguments.');
      reject(new Error('\nFAILED: Missing required arguments.'));
    } else {
      bbPromise.fromCallback(cb => JWT.verify(token, process.env.JWT_SECRET, cb))
      .then((payload) => {
        console.log('\nSUCCEEDED: Sagawa.fetchTrackingInfo >>> JWT.verify');
        console.log('\nPayload: ', payload);

        const today = Number(String(Date.now()).slice(0, 10));
        if (today > payload.exp) {
          console.log('\nFAILED: Token has expired.');
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
          console.log('\nFAILED: Sagawa.fetchTrackingInfo >>> 1) User.findById: ', results[0], '2) Sagawa.findById: ', results[1]);
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
          console.log('\nFAILED: Locate transaction document from User\'s transaction history.');
          return resolve({
            error: {
              hard: true,
              soft: false,
              message: 'This is an unauthorized request.  Contact support if you feel you\'ve received this message in error.',
            },
          });
        }

        const trackingNumber = sagawaDoc.shippingAddress.referenceId;

        return axios
        .get(`https://tracking.sagawa-sgx.com/sgx/xmltrack.asp?AWB=${trackingNumber}`);
      })
      .then((response) => {
        if (response.status !== 200) {
          console.log('\nFAILED: Request tracking info from Sagawa API: ', response.data);
          return resolve({
            error: {
              hard: true,
              soft: false,
              message: 'The appears to be a network error from our shipping provider.  Please try your request again later.  Apologies for the inconvenience.',
            },
          });
        }
        console.log('\nSUCCEEDED: Request tracking infor from Sagawa API.');
        return CleanSagawaResponse.handleTracking(response);
      })
      .then(({ error, data }) => {
        if (error) {
          console.log('\nFAILED: Parse Sagawa API response.', error, '\n', data);
          return resolve({
            error: {
              hard: true,
              soft: false,
              message: 'The tracking number used for your request has expired.  Please contact support if your purchase has not been delivered.',
            },
          });
        }

        console.log('\nSUCCEEDED: Parse Sagawa response.');
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
          totalPaid: transactionDoc.square.tender.amount_money.amount,
          totalCurrency: transactionDoc.square.tender.amount_money.currency,
          trackingInfo: data.trackingInfo,
        };

        return Transaction.findByIdAndUpdate(transactionDoc._id, {
          $set: { shippingStatus: data.phase },
        }, { new: true });
      })
      .then(() => {
        console.log('\nSUCCEEDED: 1) Updated Transaction Doc with latest data. 2) Fetch Sagawa Tracking Info.');
        resolve(responseObj);
      })
      .catch((error) => {
        console.log('\nFAILED: Fetch Sagawa Tracking information.', error);
        reject('\nFAILED: Fetch Sagawa Tracking information.');
      });
    }
  });
  /**
  * Function: "uploadOrder"
  * Generates and sends customer's order details via XML HTTP reqeuest to Sagawa API.  This function call initiates the shipping fullfillment process to the customer.
  *
  * @param {string/ Mongo Object Id} sagawaId - documentId of sagawa document.

  * @return {object} Promise resolved with Order AWB & REF id's.
  */
  sagawaSchema.statics.uploadOrder = ({ sagawaId, userId, transactionId }, Email, Transaction, User) =>
  new Promise((resolve, reject) => {
    console.log('\n\n@Sagawa.updloadOrder\n');

    if (!sagawaId || !userId || !transactionId) {
      console.log('\nFAILED: Missing required arguments.');
      reject('\nFAILED: Missing required arguments.');
    } else {
      Sagawa
      .findById(sagawaId)
      .then(sagawaDoc => { //eslint-disable-line
        if (!sagawaDoc) {
          console.log('\nFAILED: Find Sagawa document by id: ', sagawaId);

          Transaction
          .handleRefund({ sagawaId, transactionId, userId }, Email, User)
          .then(() => {
            console.log('\nSUCCEEDED: Sagawa.uploadOrder >>> Transaction.handleRefund.');
            resolve({ verified: false, sagawaId });
          })
          .catch((error) => {
            console.log('\nFAILED: Sagawa.uploadOrder >>> Transaction.handleRefund: ', error);
            resolve({ verified: false, sagawaId });
          });
        } else {
          console.log('\nSUCCEEDED: Find Sagawa document by id: ', sagawaDoc._id);
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
            </soap:Envelope>`,
            {
              headers: {
                'Content-Type': 'text/xml; charset=utf-8',
                SOAPAction: 'http://ws.com',
              },
            },
          );
        }
      })
      .then((response) => {
        if (response.status !== 200) {
          console.log('\nFAILED: Sagawa.uploadOrder >>> axios.post: ', response.data);

          Transaction
          .handleRefund({ userId, sagawaId, transactionId }, Email, User)
          .then(() => {
            console.log('\nSUCCEEDED: Sagawa.uploadOrder >>> axios.post = FAILED >>> Transaction.handleRefund.');
            resolve({ verified: false, sagawaId });
          })
          .catch((error) => {
            console.log('\nFAILED: Sagawa.uploadOrder >>> axios.post = FAILED Transaction.handleRefund: ', error);
            resolve({ sagawaId, verified: false });
          });
        } else {
          console.log('\nSUCCEEDED: Sagawa order Upload: ', response.data);

          CleanSagawaResponse.handleUpload(response)
          .then(({ data }) => {
            if (!data.verified) {
              console.log('\nFAILED: Clean Successful Sagawa Response: \n', data.errorMsg, '\n', data.msg);

              Transaction
              .handleRefund({ sagawaId, transactionId, userId }, Email, User)
              .then(() => {
                console.log('\nSUCCEEDED: Sagawa.uploadOrder >>> axios.post = SUCCEEEDED >>> !data.verified >>> Transaction.handleRefund');
                resolve({ sagawaId, verified: false });
              })
              .catch((error) => {
                console.log('\nFAILED: Sagawa.uploadOrder >>> axios.post = FAILED >>> !data.verified >>> Transaction.handleRefund: ', error);
                resolve({ sagawaId, verified: false });
              });
            } else {
              console.log('\nSUCCEEDED: Extracted AWB & REF #\'s from Sagawa resposne: ', data);
              resolve({
                data,
                sagawaId,
                verified: true,
              });
            }
          })
          .catch((error) => {
            console.log('\nFAILED: Sagawa.uploadOrder >>> axios.post = FAILED Transaction.handleRefund: ', error);
            resolve({ sagawaId, verified: false });
          });
        }
      })
      .catch((error) => {
        console.log('\nFAILED: Upload Order to Sagawa.', error);

        Transaction
        .handleRefund({ sagawaId, transactionId, userId }, Email, User)
        .then(() => {
          console.log('\nSUCCEEDED: Sagawa.uploadOrder >>> .catch >>>> Transaction.handleRefund');
          resolve({ sagawaId, verified: false });
        })
        .catch((error2) => {
          console.log('\nFAILED: Sagawa.uploadOrder >>> .catch >>> Transaction.handleRefund >>> .catch ', error2);
          resolve({ sagawaId, verified: false });
        });
      });
    }
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
  sagawaSchema.statics.uploadOrderAndSendEmail = (request, Email, Transaction, User) =>
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
      Sagawa.uploadOrder(request, Email, Transaction, User),
      Transaction.findById(transactionId),
    ])
    .then((results) => {  //eslint-disable-line
      if (!results[0].data.verified) {
        console.log('\nFAILED: Order was uploaded, but was not given required tracking information receipt: ', results[0].data);
        resolve({
          verified: false,
          userId,
          sagawaId,
          transactionId,
        });
      } else {
        console.log('\nSUCCEEDED: 1)Upload Order to Sagawa.\n', results[0], '\n 2) Fetch Transaction Doc.\n', results[1]);

        transactionDoc = results[1];
        const uploadData = results[0].data;

        emailType = transactionDoc.invoiceEmail ? 'invoiceEmail' : 'invoiceEmailNoTracking';

        return Promise.all([
          Sagawa.findByIdAndUpdate(sagawaId, {
            $set: {
              'shippingAddress.awbId': uploadData.awbId,
              'shippingAddress.referenceId': uploadData.referenceId,
              uploadStatus: 'upload',
            },
          }, { new: true }),
          Email.findEmailAndFilterLanguage(
            emailType,
            transactionDoc.emailLanguage,
          ),
        ]);
      }
    })
    .then((results) => {
      console.log('\nSUCCEEDED: Sagawa.uploadOrderAndSendEmail >>> 1) Sagawa.findByIdAndUpdate & 2) Email.findEmailAndFilterLanguage: ', results[0]._id, '\nEmail Purpose: ', results[1].purpose);

      sagawaDoc = results[0];
      const dbEmail = results[1];
      console.log('\nUpdated Sagawa Doc ID: ', sagawaDoc._id);

      const payload = {
        userId,
        sagawaId,
        exp: moment().add(10, 'd').unix(),
      };
      const {
        JWT_SECRET: jwtSecret,
        LAMBDA_ENV: lambdaEnv,
        BASE_URL: baseUrl,
        PRODUCTION_URL: productionUrl,
      } = process.env;

      const token = JWT.sign(payload, jwtSecret);
      const prodEnv = lambdaEnv === 'production';
      const trackingLink = `${prodEnv ? `${productionUrl}/#!` : `${baseUrl}/#!`}/tracking?token=${token}`;

      emailBody = transactionDoc.invoiceEmail || transactionDoc.invoiceEmailNoTracking;

      emailBody = emailBody
      .replace(/(TRACKING_TOKEN_LINK_HERE)+/g, trackingLink)
      .replace(/(ORDER_TRACKING_NUMBER_HERE)+/g, sagawaDoc.shippingAddress.referenceId);

      return Promise.all([
        Email.sendEmail({
          to: transactionDoc.emailAddress,
          htmlBody: emailBody,
        }, dbEmail),
        Transaction.findByIdAndUpdate(transactionDoc._id, {
          $set: {
            trackingLink,
            [emailType]: emailBody,
          },
        }, { new: true }),
      ]);
    })
    .then((results) => {
      console.log('\nSUCCEEDED: @Sagawa.uploadOrderAndSendEmail >>> 1) Email.sendEmail & 2) Transaction.findByIdAndUpdate: \n', results[1]);
      resolve({ verified: true, ...request });
    })
    .catch((error) => {
      console.log('\nFAILED: @Sagawa.uploadOrderAndSendEmail: ', error);
      reject(error.message);
    });
  });

  sagawaSchema.statics.batchUploadOrders = (reqObjs, Email, Transaction, User) =>
  new Promise((resolve) => {
    console.log('\n\n@Sagawa.batchUploadOrders\n');

    let successfulReqs = 0,
      failedReqs = 0,
      nextBatch = [];

    const totalReqs = reqObjs.length,
      reports = [],
      date = moment().format('YYYY/MM/DD');

    function recursiveUpload(orders) {
      const savedArray = orders;

      if (savedArray.length) {
        nextBatch = [...savedArray.splice(0, 5)];

        nextBatch
        .map(async (reqObj) => {
          const result = await Sagawa.uploadOrderAndSendEmail(reqObj, Email, Transaction, User);
          return result;
        })
        .forEach((promise, i, array) => {
          promise
          .then(({ verified, sagawaId, userId, transactionId }) => {
            if (verified) {
              successfulReqs += 1;

              reports.push({
                date,
                sagawaId,
                userId,
                transactionId,
                success: verified,
                error: false,
              });
              console.log('@batchUpload >>> .then >>> reports: ', reports);
            } else {
              failedReqs += 1;

              reports.push({
                date,
                sagawaId,
                userId,
                transactionId,
                success: verified,
                error: true,
              });
              console.log('@batchUpload >>> .catch >>> reports: ', reports);
            }

            if (i === (array.length - 1)) recursiveUpload(savedArray);
          })
          .catch((error) => {
            console.log('\nFAILED: @Sagawa.batchUploadOrders >>> Sagawa.uploadOrderAndSendEmail: ', error);
          });
        });
        console.log('\n\n*------------- CALLING NEXT BATCH -------------*\n\n');
        console.log('savedArray: ', savedArray);
      } else {
        console.log('\nNo more orders');

        setTimeout(() => {
          console.log('\nReports Object: ', { reports, total: totalReqs });
          resolve({
            reports,
            total: totalReqs,
            failed: failedReqs,
            successful: successfulReqs,
          });
        }, 3000);
      }
    }

    recursiveUpload(reqObjs);
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
  sagawaSchema.statics.cronJob = (Report, Email, Transaction, User) =>
  new Promise((resolve, reject) => {
    console.log('\n\n@Sagawa.cronJob\n');

    let reportType = '';

    Sagawa
    .find({ uploadStatus: 'pending' })
    .exec((err, dbResults) => {
      if (err) {
        console.log('\nFAILED: Sagawa.cronJob >>> Sagawa.find: ', err);
        reject(err);
      } else if (!dbResults.length) {
        reportType = 'cronJobEmpty';
        Report.createAndSendCronJobReportToStaff({
          reportType,
          mainTitle: 'NJ2JP CronJob REPORT 📠 ',
          subTitle: `Cron Job Upload Summary | ${moment().subtract(3, 'd').format('ll')} to ${moment().format('ll')}`,
          headerBlurb: 'There was no orders to upload.',
          data: {
            total: '',
            successful: '',
            failed: '',
            reports: [],
          },
        }, Email)
        .then(() => {
          console.log('\nSUCCEEDED: @Sagawa.cronJob >>> Report.createAndSendCronJobReportToStaff:');
          resolve('No orders to upload.');
        })
        .catch((error) => {
          console.log('\nFAILED: @Sagawa.cronJob >>> Report.createAndSendCronJobReportToStaff: ', error);
          reject(error.message);
        });
      } else {
        console.log(`\nFound ${dbResults.length} docs waiting to be uploaded.\n`);
        const reqObjs = dbResults.map(dbDoc => ({
          sagawaId: dbDoc._id,
          userId: dbDoc.userId,
          transactionId: dbDoc.transactionId,
        }));
        Sagawa.batchUploadOrders(reqObjs, Email, Transaction, User)
        .then((results) => {
          if (results.failed.length) {
            reportType = 'createAndSendErrorReportToStaff';
            return Report.createAndSendErrorReportToStaff({
              reportType: 'cronJobError',
              mainTitle: 'ERROR ⚠️',
              subTitle: 'Cron Job Upload Failure 🛑',
              headerBlurb: 'There was an error while trying to upload an order to Sagawa.  Immediate attention from the development team is REQUIRED!',
              data: { ...results },
            }, Email);
          } else { // eslint-disable-line
            reportType = 'createAndSendCronJobReportToStaff';
            console.log('\nSUCCEEDED: @Sagawa.cronJob >>> Sagawa.batchUploadOrders.');

            return Report.createAndSendCronJobReportToStaff({
              reportType: 'cronJobSummary',
              mainTitle: 'REPORT ✉️',
              subTitle: 'Cron Job Upload Summary 💵',
              headerBlurb: 'Congratulations! We\'ve successfully uploaded all weekend orders to Sagawa.',
              data: { ...results },
            }, Email);
          }
        })
        .then(() => {
          console.log('\nSUCCEEDED: @Sagawa.cronJob >>> Report.', reportType);
          resolve('Cron Job has finished.');
        })
        .catch((error) => {
          console.log('\nFAILED: @Sagawa.cronJob: ', error);
          reject('\nFAILED: @Sagawa.cronJob');
        });
      }
    });
  });

  const Sagawa = db.model('Sagawa', sagawaSchema);
  return Sagawa;
};
