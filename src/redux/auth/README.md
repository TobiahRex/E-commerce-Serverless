## Description
  1. The idToken is from Auth0 and set into local storage from the AuthService Class.  See "utils/authService" for more details.
  2. Because we're using **redux-persist** and the user profile is on the **blacklist** we need to populate the profile (if there is one) on refresh from local storage.
  3.  The reason we WANT the profile on the **blacklist** is because if the does not have a profile in local storage, and logs in, then the profile will load from redux persist (which will be null) and over-write the profile we receive from Auth0.
