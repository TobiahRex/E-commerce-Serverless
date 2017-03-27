# _Nicotine E-Juice E-commerce Site:_
MERN Stack App
### Deployed on Heroku [here](https://nj2jp.herokuapp.com/). This is a temporary development deployment. Final Production site will be at http://www.nj2jp.com.

## Setup:
  - `npm i` to install dependencies
  - `npm start` for development server
  - `npm run build` for production server
  - OPTIONAL
    - `touch .gitignore` I use a global `.gitignore_global` file so you should add your own so as not to push `node_modules/` once you've completed `npm i`.
    - `brew update`
    - `brew install libpng` for webpack image loader (image-webpack-loader [see here](https://github.com/tcoopman/image-webpack-loader))

  NOTES:
  1. I Highly recommend running `npm update --save` to update package json before running `npm start` or `npm build`.
  2. You may need to do a `brew update` for some of the webpack image loaders to properly work.

## WARNING:
  * Uses `webpack version 2.0`.
  * Node engine explicitly defined in `package.json` for `node@7.7.3`.
    - If you are not compliant with these version, it's HIGHLY recommended you update.

## DESCRIPTION:
Providing Nicotine Vape Juice to Japanese Customers faster than anyone.
  * Uses _apisauce_ for API calls. See API README.md for details.
  * Uses _redux-sagas_ to call customized api methods.
  * Uses _redux_sauce_ to create Types, Creators & Reducer.
  * Uses _redux-logger_ to allow for informative workflow from the devtools console.  
  * Uses _redux-devtools-extension_ to allow for a macro perspective picture of your current store's state.
  * Configured for front end environment variables using webpack.DefinePlugin().
  * Uses _BEM_ syntax styling for classNames.
  * Airbnb Style Guide implemented.

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
* March 28th, 2017:
  - Updated `webpack-image-loader` version from `3.2` to `3.3`.
  - Updated `webpack` to version `2.2`.
  - Updated `node` to version `7.7.3`. Added `engines` object to `package.json`.


<!-- ## ScreenShots:
* Terminal
  - <img src="http://i.imgur.com/RjJ7yfA.png" /> -->
