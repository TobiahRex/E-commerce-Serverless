### Authorization Saga
  - Everything starts by initiating the **watchLoginActions** in the **root-saga**.
  - If the user is NOT logged in, this will listen for _logged_in_ events - emitted by authService on startup during an AuthService redirect.
    1. if _logged_in_ event is fired, the **watchLoggedInActions** channel will take the event.
    2. Extract the payload and the type.
    3. Dispatch the correct action(with payload) according to the type.
      * For **profile** type: Call the postLoginActions generator which performs 3 tasks in _parallel_.
        1. dispatch a successful login to the auth reducer which will set **loggedIn** to _TRUE_
        2. dispatch a session action to clean the **preLoginUrl**.
        3. dispatch a user action to save the users profile in the store.
  - If the user is logged in, this will listen for _logged_out_ events - emitted by authService on startup
    1. if _logged_out_ event is fired, the **watchLogin**
