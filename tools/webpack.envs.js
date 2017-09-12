import dotenv from 'dotenv';
import path from 'path';

dotenv.load({ path: path.resolve('.env-prod') });

export default {
  development: {
    SQUARE_ENV: JSON.stringify(process.env.SQUARE_ENV),
    US_SQUARE_APPLICATION_ID: JSON.stringify(process.env.US_SQUARE_APPLICATION_ID),
    JP_SQUARE_APPLICATION_ID: JSON.stringify(process.env.JP_SQUARE_APPLICATION_ID),
    LAMBDA_ENV: JSON.stringify(process.env.LAMBDA_ENV),
    CLIENT_GRAPHQL_URL: JSON.stringify(process.env.CLIENT_GRAPHQL_URL),
    GRAPHQL_PORT: JSON.stringify(process.env.GRAPHQL_PORT),
    AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN),
    AUTH0_CLIENT_ID: JSON.stringify(process.env.AUTH0_CLIENT_ID),
    AUTH0_REDIRECT: JSON.stringify(process.env.AUTH0_REDIRECT),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    PORT: JSON.stringify(3000),
    BASE_URL: JSON.stringify(process.env.BASE_URL),
    RECAPTCHA_KEY: JSON.stringify(process.env.RECAPTCHA_KEY),
    LINE_CHANNEL_ID: JSON.stringify(process.env.LINE_CHANNEL_ID),
    LINE_REDIRECT_URI: JSON.stringify(process.env.LINE_REDIRECT_URI),
    LINE_STATE: JSON.stringify(process.env.LINE_STATE),
    FACEBOOK_APP_ID: JSON.stringify(process.env.FACEBOOK_APP_ID),
  },
  production: {
    SQUARE_ENV: JSON.stringify(process.env.SQUARE_ENV),
    US_SQUARE_APPLICATION_ID: JSON.stringify(process.env.US_SQUARE_APPLICATION_ID),
    JP_SQUARE_APPLICATION_ID: JSON.stringify(process.env.JP_SQUARE_APPLICATION_ID),
    LAMBDA_ENV: JSON.stringify(process.env.LAMBDA_ENV),
    CLIENT_GRAPHQL_URL: JSON.stringify(process.env.CLIENT_GRAPHQL_URL),
    AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN),
    AUTH0_CLIENT_ID: JSON.stringify(process.env.AUTH0_CLIENT_ID),
    AUTH0_REDIRECT: JSON.stringify(process.env.AUTH0_REDIRECT),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    PORT: JSON.stringify(process.env.PORT),
    RECAPTCHA_KEY: JSON.stringify(process.env.RECAPTCHA_KEY),
    LINE_CHANNEL_ID: JSON.stringify(process.env.LINE_CHANNEL_ID),
    LINE_REDIRECT_URI: JSON.stringify(process.env.LINE_REDIRECT_URI),
    LINE_STATE: JSON.stringify(process.env.LINE_STATE),
    FACEBOOK_APP_ID: JSON.stringify(process.env.FACEBOOK_APP_ID),
  },
};
