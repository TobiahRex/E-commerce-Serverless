import apisauce from 'apisauce';

const clientID = process.env.LINE_CHANNEL_ID;
const redirectUri = process.env.LINE_REDIRECT_URI;
const state = process.env.LINE_STATE;
// request(`https://access.line.me/dialog/oauth/weblogin?response_type=code&client_id=${clientID}&redirect_uri=${redirectUri}&state=${state}`);

const create = (baseURL = 'https://access.line.me/') => {
  const api = apisauce.create({ baseURL });

  const getCode = () => {
    api.setHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    return api.get(`dialog/oauth/weblogin?response_type=code&client_id=${clientID}&redirect_uri=${redirectUri}&state=${state}`);
  };

  return {
    getCode,
    // getToken,
    // sendToAuth,
  };
};

export default { create };
