/* eslint-disable no-console */
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

const extractUploadData = (jsonResponse) => {
  const response = jsonResponse['soapenv:Envelope']['soapenv:Body'][0]['ns:uploadDataResponse'][0]['ns:return'][0];

  console.log('\nParsed Reponse: ', response);
  if (/SQLException|maximum\sconnection|error/g.test(response)) {
    return ({
      error: true,
      errorMsg: response,
      msg: {
        en: 'Sagawa cannot upload the order at this time.',
        ja: 'この時点で佐川は注文をアップロードできません。',
      },
      verified: false,
      awbId: '',
      referenceId: '',
    });
  }

  const awbId = response.split('|')[5].replace(/(A)+/g, '');
  const referenceId = response.split('|')[1];

  if (!awbId.length || !referenceId.length) {
    return ({
      verified: false,
      awbId,
      referenceId,
    });
  }

  return ({
    verified: true,
    awbId,
    referenceId,
  });
};

const extractTrackingData = (jsonResponse) => {
  const statusCodes = [];

  const trackingInfo = jsonResponse.TRACK.INFO.map((infoObj) => {
    const date = infoObj.LCLDATE[0];
    const status = infoObj.STATUS[0];
    statusCodes.push(status);
    console.log('infoObj: ', infoObj);
    return ({
      status,
      date: `${date.slice(0, 4)}/${date.slice(4, 6)}/${date.slice(6, 8)}`,
      activity: infoObj.DETAIL[0],
      location: infoObj.COUNTRY[0],
    });
  });

  let phase = '';
  if (!statusCodes.includes('LD')) {
    if (!statusCodes.includes('TD')) {
      phase = {
        en: 'Packaging',
        ja: '処理',
      };
    } else {
      phase = {
        en: 'Shipped',
        ja: '出荷された',
      };
    }
  } else {
    phase = {
      en: 'Delivered',
      ja: '配信された',
    };
  }

  if (!trackingInfo.length) {
    return ({
      verified: false,
      phase,
      trackingInfo,
    });
  }

  return ({
    verified: true,
    trackingInfo,
    phase,
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
    problem = {
      en: 'There was a network error.  Please try again.  If the problem persists, please contact support.  We apologize for the inconvenience.',
      ja: 'ネットワークエラーが発生しました。 もう一度お試しください。 問題が解決しない場合は、サポートに連絡してください。 ご不便をおかけして申し訳ございません。',
    };
    reject(problem);
  }

  xml2js.parseString(data, (err, results) => {
    if (err) {
      problem = {
        en: 'There was a server error.  Please try again.  If the problem persists, please contact support.  We apologize for the inconvenience.',
        ja: 'サーバーエラーが発生しました。 もう一度お試しください。 問題が解決しない場合は、サポートに連絡してください。 ご不便をおかけして申し訳ございません。',
      };
      reject(problem);
    }

    const { verified, postalCode, jpAddress } = extractPostalData(results);
    /*  eslint-disable no-console */
    console.log('verified: ', verified);
    console.log('postalCode: ', postalCode);
    console.log('jpAddress: ', jpAddress);
    /*  eslint-enable no-console */

    if (!verified) {
      problem = {
        en: 'That postal code is invalid.  Verify you have entered the correct postal code and please try again.',
        ja: 'その郵便番号は無効です。 正しい郵便番号を入力したことを確認してから、もう一度お試しください。',
      };
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
    problem = {
      en: 'There was a problem submitting your order.  Please try again.  If the problem persists, please contact support.  We apologize for the inconvenience.',
      ja: '注文を送信する際に問題が発生しました。 もう一度お試しください。 問題が解決しない場合は、サポートに連絡してください。 ご不便をおかけして申し訳ございません。',
    };
    reject(problem);
  }

  xml2js.parseString(data, (err, results) => {
    if (err) {
      problem = {
        en: 'There was a server error.  Please try again.  If the problem persists, please contact support.  We apologize for the inconvenience.',
        ja: 'サーバーエラーが発生しました。 もう一度お試しください。 問題が解決しない場合は、サポートに連絡してください。 ご不便をおかけして申し訳ございません。',
      };
      reject(problem);
    }

    const {
      error,
      errorMsg,
      msg,
      verified,
      awbId,
      referenceId,
    } = extractUploadData(results);
    /*  eslint-disable no-console */
    console.log('verified: ', verified);
    console.log('awbId: ', awbId);
    console.log('referenceId: ', referenceId);
    /*  eslint-enable no-console */

    if (!verified) {
      resolve({
        data: {
          verified: false,
          error,
          errorMsg,
          msg,
          awbId,
          referenceId,
        },
      });
    }

    resolve({
      data: {
        verified: true,
        awbId,
        referenceId,
      },
    });
  });
});

const handleTracking = response =>
new Promise((resolve) => {
  const { data } = response;

  xml2js.parseString(data, (err, results) => {
    if (err) resolve({ error: err, data: results });

    const { verified, trackingInfo, phase } = extractTrackingData(results);
    console.log('verified: ', verified);
    console.log('trackingInfo: ', trackingInfo);
    console.log('phase: ', phase);

    if (!verified) {
      resolve({
        error: {
          en: 'Could not parse tracking data.',
          ja: 'トラッキングデータを解析できませんでした。',
        },
        data: {
          phase,
          trackingInfo,
        },
      });
    } else {
      resolve({
        error: false,
        data: {
          phase,
          trackingInfo,
        },
      });
    }
  });
});

export default {
  handlePostal,
  handleUpload,
  handleTracking,
};
