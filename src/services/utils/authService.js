import { EventEmitter } from 'events';
import auth0 from 'auth0-js';
import { isTokenExpired } from './jwtHelper';

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
  login = (username, password) => {
    this.auth0.redirect.loginWithCredentials({
      connection: 'Username-Password-Authentication',
      username,
      password,
    }, (error) => {
      this.emit('login_failure', error);
    });
  }
  signUp = (email, password) => {
    this.auth0.redirect.signupAndLogin({
      connection: 'Username-Password-Authentication',
      email,
      password,
    }, (err) => this.emit('login_failure', err));
  }
  loggedIn = () => {
    const token = this.getToken();
    return !!token && !isTokenExpired(token);
  };
  setToken = (accessToken, idToken) => {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('id_token', idToken);
  }
  setProfile = (profile) => {
    localStorage.setItem('profile', JSON.stringify(profile));
    this.emit('logged_in', profile);
  }
  getProfile = () => {
    const profile = JSON.parse(localStorage.getItem('profile')) || {};
    return profile;
  }
  getToken = () => JSON.parse(localStorage.getItem('id_token'));
  logout = () => {
    localStorage.clear();
    this.emit('logged_out');
  }
}
