import auth0 from 'auth0-js';

import { browserHistory } from 'react-router';

export default class AuthService {
  constructor(clientId, domain) {
    // this.auth0 = new Auth0Lock(clientId, domain, {
    //   auth: {
    //     redirectUrl: 'http://localhost:3000/login',
    //     responseType: 'token',
    //   },
    // });
    this.auth0 = new auth0.WebAuth({
      clientID: process.env.AUTH0_CLIENT_ID,
      domain: process.env.AUTH0_DOMAIN,
      responseType: 'token id_token',
      redirectUri: 'http://localhost:3000/login',
    });
  }

  login = (username, password) => {
    this.auth0.redirect.loginWithCredentials({
      connection: 'Username-Password-Authentication',
      username,
      password,
    }, err => alert(`Error! : ${err.description}`));
  };

  _doAuthentication = (authResult) => {
    this.setToken(authResult.idToken);
    browserHistory.replace('/home');
  };

  setToken = idToken => localStorage.setItem('id_token', idToken);

  getToken = () => localStorage.getItem('id_token');


  logout = () => localStorage.removeItem('id_token');

  loggedIn = () => !!this.getToken();
}
