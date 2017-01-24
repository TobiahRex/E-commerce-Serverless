# _E-commerce Distribution Site:_
MERN Stack App
<!-- ### Deployed on Heroku [here](https://itiner-ez.herokuapp.com/). -->
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
  * Airbnb Style Guide implemented.

## Setup:
  - `npm i` to install dependencies
  - `npm start` for development server
  - `npm run build` for production server

  NOTE: I Highly recommend running `npm update --save` to update package json before running `npm start` or `npm build`.

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
<!-- * December 1st 2016:
  - Extensive refactor to entire project.  WARNING in the process of re-factoring package.json and webpack.config for smoother deployment however process is not yet complete.  Will update here when it's finished and GTG.
* December 2nd 2016:
  - Finished major refactor and deployment. Click the "DEMO" link above to check out the latest working version.  Thanks for the interest. -->

## ScreenShots:
<!-- * Terminal
  - <img src="http://i.imgur.com/RjJ7yfA.png" /> -->
