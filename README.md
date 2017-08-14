# Nic Juice 2 Japan (_NJ2JP_):
E-commerce store providing nicotine vape juice to Japanese customers faster than anyone.
  - Deployed using _Serverless_ | AWS Lambda | AWS S3.  
  - Backend API = **GraphQL**.
  - Database utilizes a **Mongo Cluster** with 3 nodes. 2 Full + 1 Arbiter.
  - Client-side API requests are generated from **Apollo Client** wrapped components.
  - Other Client-side API requests are also generated from the npm library **api-sauce**.
  - The rest of the app sits on **React.js** & **React Router*(V3)** (with Code splitting), **Redux** & **Redux Persist** (with WebStorage).

## Cloud Architecture
<img src="http://i.imgur.com/00So8Ua.png" />

## Site Address
 [Nic Juice 2 Japan](http://nj2jp-react.s3-website-ap-northeast-1.amazonaws.com/).
  - ☝🏼 That site is under **Heavy Development** and may at times, not be working.  Will update here once availability is 100%.

## Splash Preview
<img src="http://i.imgur.com/wuHyw50.png" />

## SETUP:
  - `npm i` || `yarn` to install dependencies
  - `npm start` for development server
  - `npm run build` for production server

  ### OPTIONAL
  - `touch .gitignore` I use a global `.gitignore_global` file so you should add your own so as not to push `node_modules/` once you've completed `npm i`.
  - `brew update`
  - `brew install libpng` for webpack image loader (image-webpack-loader [see here](https://github.com/tcoopman/image-webpack-loader))

  ### NOTES:
  1. I Highly recommend running `npm update --save` || `yarn upgrade` to update package.json &/or yarn.lock before running `npm start` or `npm run build`.
  2. You may need to do a `brew update` for some of the webpack image loaders to properly work.
  3. If you're following our strategy and deploying the static site to Amazon S3, then you can also run `deploy-to-s3`.  Be sure to modify the bucket name.

## WARNINGS:
  * Uses `webpack version 2.0`.
  * Node engine explicitly defined in `package.json` for `node@7.7.3`.
  * If you are not compliant with these versions, it's HIGHLY recommended you update.

## TECHNOLOGIES:
  1. ### API's
    * [fixer.io](http://fixer.io) | Exchange Rates.
    * [taxratesapi.avalara.com](http://taxratesapi.avalara.com/) | Tax Rates.
    * [ipinfo.io](http://ipinfo.io) | IP address & Geolocation.
    * [Square](http://squareup.com) | Payment Services via Connect API.
    * [Market Hero](http://markethero.com) | Marketing API.
    * [Serverless](http://serverless.com) | Framework covering AWS Lambda.
    * [AWS SES](https://aws.amazon.com/ses/) | Email Notifications.
    * [AWS SNS](https://aws.amazon.com/sns/) | Receiving Backend Push Notifications.
    * [AWS S3](https://aws.amazon.com/s3/) | Static asset hosting.
    * [AWS Route 53](https://aws.amazon.com/route53/) | DNS routing.
    * [AWS CloudFront](https://aws.amazon.com/cloudfront/) | Latency reduction via CDN.
    * [AWS Lambda](https://aws.amazon.com/lambda/) | All Backend Services.
    * [AWS Api-Gateway](https://aws.amazon.com/api-gateway/) | HTTP endpoints for Lambda services.
  2. ### Libraries & Packages
    * Uses _recompose_ for customized Higher Order Component implementation.
    * Uses _apisauce_ for API calls. See API README.md for details.
    * Uses _react-router-redux_ for dispatching route changes & history.
    * Uses _apollo-grpahql_ for providing API calls directly to componenents.
    * Uses _redux-persist_ for long term browser caching.
    * Uses _redux-sagas_ for dispatching and handling async actions.
    * Uses _redux_sauce_ for creating reducers.
    * Uses _redux-logger_ for informative dev. workflow @ devtools console.  
    * Uses _redux-devtools-extension_ for  dev. workflow @ devtools console.
    * Uses _babel-node_ for latest ECMA version transpiling of dev-backend and Hot reloading.
    * Uses _BEM_ syntax styling for classNames.
    * Uses _Airbnb Style Guide_.

# NOTES:
  1. ### Redux Reducers:
    * This bp's Redux reducer methods rely on the developer to customize the logic to maintain immutability of state. This was done _intentionally_ to strengthen developers abilities in manipulating state.  If this feels cumbersome, I highly recommend using _seamless-immutable_ (refs below) to outsource this process in a very clean, and simple way.
  2. ### Helper Libraries:
    * [apisauce](https://github.com/skellock/apisauce)
    * [redux-logger](https://github.com/evgenyrodionov/redux-logger)
    * [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
    * [redux-saga](https://github.com/yelouafi/redux-saga)
    * [ramda](https://github.com/ramda)
  3. ### Suggested Libraries:
    * [redux-sauce](https://github.com/skellock/reduxsauce)
    * [seamless-immutable](https://github.com/rtfeldman/seamless-immutable)
  4. ### Setting up S3 automation:
    * See setup instructions [HERE](https://github.com/TobiahRex/nj2jp/blob/master/readmeFiles/s3Automation.md).
  5. ### Data Model Documentation:
    * [Product Model](https://github.com/lakshmantgld/nj2jp/blob/master/readmeFiles/productSchema.md)
    * [User Model](https://github.com/lakshmantgld/nj2jp/blob/master/readmeFiles/userSchema.md)

# Important Launch Notes:
  1. Modifiy LAMBDA_GRAPHQL env variable throughout `src/` application to point to the `production` database & lambda endpoint.
  2. Modify the serverless MONGO_URI env variable inside the AWS console dashboard.
