import xml2js from 'xml2js';

const postal = (response) => {
  let { problem, data } = response;
  const { ok } = response;
  console.log('RESPONSE:\n', response, '\n\n');

  if (problem) {
    console.log('\nERROR: ', problem);
    xml2js.parseString(data, (err, results) => {
      if (err) {
        problem = err;
      } else {
        let response = results['soapenv:Envelope']['soapenv:Body'][0]['ns:getAddrResponse'][0]['ns:return'][0];

        const postalCode = response.split('|')[0];
        const jpAddress = response.split('|')[1];

        data = {
          postalCode
          jpAddress,
        };
      }
      console.log('PARSE OK: \n', JSON.stringify(results, null, 2));
    });
  }
  if (ok) {
    xml2js.parseString(data, (err, results) => {
      if (err) console.log('PARSE ERROR: \n', err);
      console.log('PARSE OK: \n', JSON.stringify(results, null, 2));
    });
  }
}

export default {
  postal,
};
