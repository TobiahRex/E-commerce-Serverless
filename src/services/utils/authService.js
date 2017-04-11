import Auth0Lock from 'auth0-lock';

import { browserHistory } from 'react-router';

export default class AuthService {
  constructor(clientId, domain) {
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:3000/login',
        responseType: 'token',
      },
    });

    this.lock.on('authenticated', this._doAuthentication);
  }

  _doAuthentication = (authResult) => {
    this.setToken(authResult.idToken);
    browserHistory.replace('/home');
  };

  setToken = idToken => localStorage.setItem('id_token', idToken);

  getToken = () => localStorage.getItem('id_token');

  login = () => this.lock.show();

  logout = () => localStorage.removeItem('id_token');

  loggedIn = () => !!this.getToken();
}
