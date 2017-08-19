/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
import axios from 'axios';
import moment from 'moment';
import sagawaSchema from '../../schemas/sagawaSchema';
import db from '../../connection';
import Product from '../product';

import {
  ZipArrays,
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

sagawaSchema.statics.validatePostal = ({ userId, postalCode }) =>
new Promise((resolve, reject) => {
  console.log('SENDING REQUEST TO SAGAWA');
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
    console.log('Reieved response from Sagawa.');
    return CleanSagawaResponse.handlePostal(response);
  })
  .then(({ problem, data }) => { //eslint-disable-line
    console.log('data: ', data);
    console.log('problem: ', problem);
    if (problem) {
      console.log('There was an error while trying to validate postal code', postalCode, '.  Error = ', problem);
      reject({
        error: {
          hard: true,
          soft: false,
          message: problem,
        },
      });
    } else {
      console.log('Successfully received a valid Address from postal code input.  Creating Sagawa document now.', data);
      return bbPromise.fromCallback(cb => Sagawa.create({
        userId,
        postalInfo: data.postalInfo,
      }, cb));
    }
  })
  .then((newDoc) => {
    console.log('Successfully created new Sagawa document.', newDoc);
    resolve(newDoc);
  })
  .catch((error) => {
    console.log(`Error while trying to validate postal code: ${error}`);
    reject(`Error while trying to validate postal code: ${error}`);
  });
});

sagawaSchema.statics.deepUpdate = orderInfo =>
new Promise((resolve, reject) => {
  console.log('\n\n@Sagawa.createUploadBody\n');

  const {
    cart,
    userId,
    sagawa,
    total,
    transactionId,
  } = orderInfo;

  Promise.all([
    Sagawa.findByIdAndUpdate(sagawa.sagawaId, {
      $set: {
        userId,
        transactionId,
        shippingAddress: {
          boxid: `NJ2JP${moment().format('YYYYMMDDSS')}`,
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
      },
    }, { new: true }),
    Product.find({ _id: { $in: cart.map(({ _id }) => _id) } }).exec(),
  ])
  .then((results) => {
    console.log('Succcess! 1) Updated Sagawa document with Shipping Information.  2) Retrieved Product documents from cart _id\'s.');

    const updatedSagawaDoc = results[0];
    const dbProducts = results[1];

    const updatedCart = ZipArrays(cart, dbProducts, (cartProduct, dbProduct) => ({ qty: cartProduct.qty, ...dbProduct }));

    console.log('Zipped cart and db products together.', JSON.stringify(updatedCart, null, 2));

    return Sagawa.findByIdAndUpdate(updatedSagawaDoc._id, {
      $set: {
        items: GenerateItemObjs(updatedCart),
      },
    }, { new: true });
  })
  .then((updatedSagawaDoc) => {
    console.log('Finished updating Sagawa document: ', updatedSagawaDoc);
    resolve('Finished updating Sagawa document.');
  })
  .catch((error) => {
    console.log('Could not update Sagawa document: ', error);
    reject('Could not update Sagawa document.');
  });
});

sagawaSchema.statics.orderUpload = sagawaId =>
new Promise((resolve, reject) => {
  console.log('\n\n@Sagawa.updloadOrder\n');

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
        <DATA>
          ${xmlOut(GenerateAddressXml(sagawaDoc))}
          ${xmlOut(GenerateItemsXml(sagawaDoc))}
        </DATA>
      </handler>
    </uploadFile>
    </soap:body>
    </soap:Envelope>`, {
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        SOAPAction: 'http://ws.com',
      },
    })
  .then((apiResult) => {
    if (apiResult.status !== 200) {
      console.log('Could not upload order to Sagawa: ', apiResult.data);
      resolve({
        error: {
          hard: true,
          soft: false,
          message: 'Could not upload order to sagawa',
        },
      });
    }

    resolve(apiResult.data);
  })
  .catch((error) => {
    reject(error);
  })
});

const Sagawa = db.model('Sagawa', sagawaSchema);
export default Sagawa;
