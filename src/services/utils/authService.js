import auth0 from 'auth0-js';
import { isTokenExpired } from './jwtHelper';

export default class AuthService {
  constructor() {
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
    }, ({ description }) => alert(`Error: ${description}`));
  };

  signUp = (email, password) => {
    this.auth0.redirect.signupAndLogin({
      connection: 'Username-Password-Authentication',
      email,
      password,
    }, ({ description }) => alert(`Error: ${description}`));
  }

  loginWithGoogle = () => this.auth0.authorize({
    connection: 'google-oauth2',
  })

  parseHash = (hash) => {
    this.auth0.parseHash({
      hash,
      _idTokenVerification: false,
    }, (err, authResult) => {
      if (err) {
        alert(`Error: ${err.errorDescription}`);
      }

      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setToken(authResult.accessToken, authResult.idToken);
        this.auth0.client.userInfo(authResult.accessToken, (error, profile) => {
          if (error) {
            alert(`Error: Could not load profile - ${error}`);
          } else {
            this.setProfile(profile);
            // browserHistory.replace('/home');
            // TODO this functionality needs to be sourced wherever this function is being called.
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
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('id_token', idToken);
  }

  setProfile = (profile) => {
    localStorage.setItem('profile', JSON.stringify(profile));
    // TODO: Find a way to dispatch this event.
  }

  getProfile = () => {
    const profile = localStorage.getItem('profile');
    return profile && JSON.parse(localStorage(profile));
  }

  getToken = () => localStorage.getItem('id_token');

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  _doAuthentication = (authResult) => {
    this.setToken(authResult.idToken);
    // browserHistory.replace('/home');
    // TODO: This needs to be sourced to the invocation.
  };
}
