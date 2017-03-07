# _E-commerce Distribution Site:_
MERN Stack App
### Deployed on Heroku [here](https://nj2jp.herokuapp.com/). This is a temporary development deployment. Final Production site will be at http://www.nj2jp.com.
<!-- <img src="http://imgur.com/dTXjfrU.png" /> -->


## DESCRIPTION:
Providing Nicotine Vape Juice to Japanese Customers faster than anyone.
  * Uses _apisauce_ for API calls. See API README.md for details.
  * Uses _redux-sagas_ to call customized api methods.
  * Uses _redux_sauce_ to create Types, Creators & Reducer.
  * Uses _redux-logger_ to allow for informative workflow from the devtools console.  
  * Uses _redux-devtools-extension_ to allow for a macro perspective picture of your current store's state.
    - <img src="http://i.imgur.com/GD4VCkW.png" />
  * Configured for front end environment variables using webpack.DefinePlugin().
  * Uses _BEM_ syntax styling for classNames.
  * Airbnb Style Guide implemented.

## Setup:
  - `npm i` to install dependencies
  - `npm start` for development server
  - `npm run build` for production server

  NOTES:
  1. I Highly recommend running `npm update --save` to update package json before running `npm start` or `npm build`.
  2. You may need to do a `brew update` for some of the dependencies.


## NOTE on Reducers:
 This bp's Redux reducer methods rely on the developer to customize the logic to maintain immutability of state. This was done _intentionally_ to strengthen developers abilities in manipulating state.  If this feels cumbersome, I highly recommend using _seamless-immutable_ (refs below) to outsource this process in a very clean, and simple way.

## Helper Libraries:
* [apisauce](https://github.com/skellock/apisauce)
* [redux-logger](https://github.com/evgenyrodionov/redux-logger)
* [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
* [redux-saga](https://github.com/yelouafi/redux-saga)
* [ramda](https://github.com/ramda)

## Suggested Libraries:
* [redux-sauce](https://github.com/skellock/reduxsauce)
* [seamless-immutable](https://github.com/rtfeldman/seamless-immutable)

## Updates:
* March 7th, 2017:
  - Added Sketch Mockups & Wireframes file to `tools/`
  - Responsiveness is still in development. Media Queries are `@media only screen and (max-width : 640px)` for mobile & `@media only screen and (min-wdith : 641px)` for web.  This is a recent change, and I haven't optimized all style sheets for those settings as of yet.
  - Not all stylesheets are implementing _BEM_.  It was recent change and previous naming conventions are still in use for some style sheets.


<!-- ## ScreenShots:
* Terminal
  - <img src="http://i.imgur.com/RjJ7yfA.png" /> -->
