import { EventEmitter } from 'events';
import auth0 from 'auth0-js';
import { isTokenExpired } from './jwtHelper';
import { authLocalForage as localForage } from './localForage';

export default class AuthService extends EventEmitter {
  constructor() {
    super();

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
    }, (error) => {
      this.emit('login_failure', error);
      alert(`Error: ${error.description}`);
    });
  };

  signUp = (email, password) => {
    this.auth0.redirect.signupAndLogin({
      connection: 'Username-Password-Authentication',
      email,
      password,
    }, ({ description }) => alert(`Error: ${description}`));
  }

  loginWithGoogle = () => this.auth0.authorize({ connection: 'google-oauth2' })

  loginWithTwitter = () => this.auth0.authorize({ connection: 'twitter' })

  loginWithFacebook = () => this.auth0.authorize({ connection: 'facebook' })

  loginWithLinkedin = () => this.auth0.authorize({ connection: 'linkedin' })

  loginWithLine = () => this.auth0.authorize({ connection: 'line' });

  parseHash = (hash) => {
    this.auth0.parseHash({
      hash,
      _idTokenVerification: false,
    }, (err, authResult) => {
      if (err) {
        this.emit('login_failure', err);
      }

      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setToken(authResult.accessToken, authResult.idToken);
        this.auth0.client.userInfo(authResult.accessToken, (error, profile) => {
          if (error) {
            this.emit('login_failure', error);
          } else {
            this.setProfile(profile);
            // browserHistory.replace('/home');
          }
        });
      }
    });
  }

  loggedIn = () => {
    const token = this.getToken();
    return !!token && !isTokenExpired(token);
  };

  setToken = (accessToken, idToken) => {
    localForage.setItem('access_token', accessToken);
    localForage.setItem('id_token', idToken);
  }

  setProfile = (profile) => {
    localForage.setItem('profile', profile);
    this.emit('logged_in', profile);
  }

  getProfile = () => {
    const profile = localForage.getItem('profile') || {};
    return profile;
  }

  getToken = () => localForage.getItem('id_token');

  logout = () => {
    localForage.clear();
    this.emit('logged_out');
  }
}
