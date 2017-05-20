# Single Product Page - NJ2JP:
Provides a detailed user interface for adding items to the User's/Guest's cart.

## Overview
  - This container is connected to both **GraphQL** via **Apollo Client** middleware, and **Redux**.
  - It imports 3) GraphQL helper functions
    1. _FindProductById_
    2. _AddToMemberCart_
    3. _UpdateToMemberCart_
    4. NOTE: By convention, I've capitalized the first letter of these helper functions to help easily identify them as GraphQL specific functions.
  - The _FindProductById_ method, returns a **data** object, in which, contains the results for the query under the namesake property.
  - **componentWillReceiveProps** anticipates to receive the async result for the GraphQL query, as well as other asynch actions for **loggedIn**.

## Class Methods:
  1. ### _modalHandler_
    * Receives the event, determines which Modal was triggered by traversing the DOM and finding the unique **data-tag** value.
    * Once found, it calls 1 of 2 helper function _toggleModalAndGo_ or _toggleModal_.  The main difference between the two is dynamically assign potential react-router routes or not.
  2. ### _toggleModalAndGo_
    * Dynamically he possibility that the user will navigate away from the **Single Product** page via the Navigation Action buttons inside the modals.  In this case, those action buttons locations need to be dynamically assigned. See the respective modals for further details.
    
