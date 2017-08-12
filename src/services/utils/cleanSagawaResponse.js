import xml2js from 'xml2js';

const extractData = (jsonResponse) => {
  const response = jsonResponse['soapenv:Envelope']['soapenv:Body'][0]['ns:getAddrResponse'][0]['ns:return'][0];

  const postalCode = response.split('|')[0];
  const jpAddress = response.split('|')[1];

  data = {
    postalCode,
    jpAddress,
  };
}

const postal = (response) => {
  let { problem, data } = response;
  const { ok } = response;
  console.log('RESPONSE:\n', response, '\n\n');

  if (problem) {
    problem = `There was a Network Error.  ${problem}.  Please try again.  If the problem persists, please contact support.  We apologize for the inconvenience.`;
  } else if (ok) {
    xml2js.parseString(data, (err, results) => {
      if (err) {
        problem = `There was an internal Error:  ${err}.  Please try again.  If the problem persists, please contact support.  We apologize for the inconvenience.`;
      } else {
        const { error, postalCode, jpAddress } = extractData(results);
        if (error) {
          problem = 'That postal code is invalid.  Verify you\'ve entered the correct postal code and please try again.';
        } else {
          data = {
            postalCode,
            jpAddress,
          };
          return ({
            ok,
            data,
            problem,
          });
        }
      }
    });
  }
};

export default {
  postal,
};
