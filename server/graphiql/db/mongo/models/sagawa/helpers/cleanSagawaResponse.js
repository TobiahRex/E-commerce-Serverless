import xml2js from 'xml2js';

const extractPostalData = (jsonResponse) => {
  const response = jsonResponse['soapenv:Envelope']['soapenv:Body'][0]['ns:getAddrResponse'][0]['ns:return'][0];

  const postalCode = response.split('|')[0];
  const jpAddress = response.split('|')[1];

  if (!postalCode.length || !jpAddress.length) {
    return ({
      verified: false,
      postalCode,
      jpAddress,
    });
  }

  return ({
    verified: true,
    postalCode,
    jpAddress,
  });
};

const extractTrackingData = (jsonResponse) => {
  const response = jsonResponse['soapenv:Envelope']['soapenv:Body'][0]['ns:uploadDataResponse'][0]['ns:return'][0];

  const trackingNum = response.split('|')[5].replace(/(A)+/g, '');
  const referenceNum = response.split('|')[1];

  if (!trackingNum.length || !referenceNum.length) {
    return ({
      verified: false,
      trackingNum,
      referenceNum,
    });
  }

  return ({
    verified: true,
    trackingNum,
    referenceNum,
  });
};

/**
* Function: "handlePostal";
* 1. Extracts the 3 parts of the axios response: ok, problem & data.
* 2a. Checks for a network error from axios.  If found, assign the "problem" value with amplifying information to the customer and returns the entire response object to the Saga that initiated the network request.
* 2b. If there was no network error, parses the XML response into JSON.
* 3a. Checks for a parse error.  If found, assign the "problem" value with amplifying info to the customer and returns the entire response object to the Saga that initiated the network request.
* 3b. If no parsing error, calls "extractData" passing in the results object.
* 4. Once extraction is complete, checks for an error given by the "extractData" function. If found, assign the "problem" value with amplifying information to the customer and returns the entire response object to the Saga that initiated the network request.
* 5. If extraction was successful, and no errors occured, returns the entire response object to the Saga that initiated the network request.
*
* @param {objs} response - the axios response object.
*
* @return {object} results - the modified axios response object.
*/
const handlePostal = response =>
new Promise((resolve, reject) => {
  const { status, data } = response;
  let problem = status !== 200;

  if (problem) {
    problem = 'There was a network error.  Please try again.  If the problem persists, please contact support.  We apologize for the inconvenience.';
    reject(problem);
  }

  xml2js.parseString(data, (err, results) => {
    if (err) {
      problem = `There was an internal Error:  ${err}.  Please try again.  If the problem persists, please contact support.  We apologize for the inconvenience.`;
      reject(problem);
    }

    const { verified, postalCode, jpAddress } = extractData(results);
    /*  eslint-disable no-console */
    console.log('verified: ', verified);
    console.log('postalCode: ', postalCode);
    console.log('jpAddress: ', jpAddress);
    /*  eslint-enable no-console */

    if (!verified) {
      problem = 'That postal code is invalid.  Verify you\'ve entered the correct postal code and please try again.';
      reject(problem);
    }

    resolve({
      problem,
      data: {
        postalInfo: {
          verified,
          jpAddress,
          postalCode,
        },
      },
    });
  });
});

const handleUpload = response =>
new Promise((resolve, reject) => {
  const { status, data } = response;
  let problem = status !== 200;

  if (problem) {
    problem = 'There was a problem submitting your order.  Please try again.  If the problem persists, please contact support.  We apologize for the inconvenience.';
    reject(problem);
  }

  xml2js.parseString(data, (err, results) => {
    if (err) {
      problem = `There was an internal Error:  ${err}.  Please try again.  If the problem persists, please contact support.  We apologize for the inconvenience.`;
      reject(problem);
    }

    const { verified, postalCode, jpAddress } = extractPostalData(results);
    /*  eslint-disable no-console */
    console.log('verified: ', verified);
    console.log('postalCode: ', postalCode);
    console.log('jpAddress: ', jpAddress);
    /*  eslint-enable no-console */

    if (!verified) {
      problem = 'That postal code is invalid.  Verify you\'ve entered the correct postal code and please try again.';
      reject(problem);
    }

    resolve({
      problem,
      data: {
        postalInfo: {
          verified,
          jpAddress,
          postalCode,
        },
      },
    });
  });
});

export default {
  handlePostal,
  handleUpload,
};
