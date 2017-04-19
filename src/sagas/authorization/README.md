### Authorization Saga Control Flow
  - Everything starts by initiating the **authorizationSaga** in the **root-saga**.
  - If the user is NOT logged in, this will listen for _logged_in_ event - eventually emitted by _AuthService_ on startup during an **Auth0** redirect. - **OR** - If  _AUTH_SOCIAL_LOGIN_ action is dispatched from the login view.
    1. if _logged_in_ action is dispatched, the **watchLoggedInActions** channel will take the event.
    2. Extract the payload and the type.
    3. Dispatch the correct action(with payload) according to the type.
      * For **loggedIn** type: Call the postLoginActions generator which performs 3 tasks in _parallel_.
        1. dispatch a successful login to the auth reducer which will set **loggedIn** to _TRUE_
        2. dispatch a session action to clean the **preLoginUrl**.
        3. dispatch a user action to save the users profile in the store.
      * For **loggedOut** type: Dispatch a _authActions.loggedOut_ action to clean up the auth reducers state.
      * For **error** type: Dispatch an _authActions.loginFailure()_ action to display to the user on the Login view.
  - If the _AUTH_SOCIAL_LOGIN_ action is dispatched, the _socialLogin_ generator will fire.  It will first call a **blocking** generator to _preLoginActions_ which fires off 2 **parallel** actions
    1. An action to save the _preLoginPage_ to localStorage so once re-direct occurs, we can send the user back to that view. (Better UX).
    2. An action to set the _authorizationInProgress_ to _TRUE_ so that we show the loading icon in the Login view.
    3. Eventually, **Auth0** will send the user back to our re-direct url ('/login') registered under our application account.  When this occurs, the Login view, will check the pre-login url we saved and if a value is found, send the user back to that page.  When the route **"/login"** is active, an _onEnter_ callback is fired from the Route component.  This callback calls, the _AuthService_ **paresAuthHash** method.  This method does 4 jobs.
      * Job 1 = Authenticate the login using the _auth_token_ && _id_token_ located in the redirect-uri as a query parameter.
      * Job 2 = If successfull, save those values in local storage.
      * Job 3 = Use the _auth_token_ to fetch the users profile from Auth0 and save it in LocalStorage.
      * Job 4 = Once all Auth0 data is saved in LocalStorage - emit a _logged_in_ event.  This event will be heard by our authorization Saga.
