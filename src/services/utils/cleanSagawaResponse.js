import xml2js from 'xml2js';

const extractData = (jsonResponse) => {
  const response = jsonResponse['soapenv:Envelope']['soapenv:Body'][0]['ns:getAddrResponse'][0]['ns:return'][0];

  const postalCode = response.split('|')[0];
  const jpAddress = response.split('|')[1];

  if (!postalCode.length || !jpAddress.length) {
    return ({
      error: true,
      postalCode,
      jpAddress,
    });
  }

  return ({
    error: false,
    postalCode,
    jpAddress,
  });
};

/**
* Function: "handlePostal";
* 1. Extracts the 3 parts of the axios response: ok, problem & data.
* 2a. Checks for a network error from axios.  If found, assign the "problem" value with amplifying information to the customer.
* 2b. If there was no network error, parses the XML response into JSON.
* 3. 
*
* @param {string} postalCode - the postal code to validate.
*
* @return {object} XML parsed as JSON response object.
*/
const handlePostal = (response) => {
  let { problem } = response;
  const { ok, data } = response;

  if (problem) {
    problem = `There was a Network Error.  ${problem}.  Please try again.  If the problem persists, please contact support.  We apologize for the inconvenience.`;
  } else if (ok) {
    xml2js.parseString(data, (err, results) => {
      if (err) {
        problem = `There was an internal Error:  ${err}.  Please try again.  If the problem persists, please contact support.  We apologize for the inconvenience.`;
        return ({
          ok,
          data,
          problem,
        });
      }

      const { error, postalCode, jpAddress } = extractData(results);

      if (error) {
        problem = 'That postal code is invalid.  Verify you\'ve entered the correct postal code and please try again.';
        return ({
          ok,
          data,
          problem,
        });
      }

      return ({
        ok,
        data: {
          jpAddress,
          postalCode,
        },
        problem,
      });
    });
  }
};

export default {
  handlePostal,
};
