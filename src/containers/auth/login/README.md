### Social Login
- Starts by saving the previous page in state.
- Once the user clicks on a social login type, authSocialLogin action is caught by authSocialLogin Saga.
- Once the redirect happens at "/login", the parseAuthHash function fires.
- The parseAuthHash does several things...
  1. Fetches user profile from Auth0 and saves it in localStorage.
  2. Then fires off an event "loggedIn".
  3. The event listener is at "utils/index.js" and starts by cleaning the url.
  4. The event listener also dispatches 2 more actions
    - dispatches a userAction to save the user profile so that the redux state has a local copy of the user profile. (Also automatically saved in local storage).
    - dispatches an authAction to identify a successful login.
  5. The loginContainer then sees the login success flag from the redux state and checks whether to re-direct the user to the view that the user was on before they logged in or not.
