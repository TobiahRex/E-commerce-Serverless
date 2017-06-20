import dotenv from 'dotenv';

dotenv.load({ silent: true });

export default {
  development: {
    LAMBDA_ENV: JSON.stringify(process.env.LAMBDA_ENV),
    API_GATEWAY_GRAPHQL: JSON.stringify(process.env.API_GATEWAY_GRAPHQL),
    GRAPHQL_PORT: JSON.stringify(process.env.GRAPHQL_PORT),
    // LOCAL_GRAPHQL: JSON.stringify(process.env.LOCAL_GRAPHQL),
    AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN),
    AUTH0_CLIENT_ID: JSON.stringify(process.env.AUTH0_CLIENT_ID),
    AUTH0_REDIRECT: JSON.stringify(process.env.AUTH0_REDIRECT),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    PORT: JSON.stringify(3000),
    BASE_URL: JSON.stringify(process.env.BASE_URL),
    RECAPTCHA_KEY: JSON.stringify(process.env.RECAPTCHA_KEY),
    LINE_CHANNEL_ID: JSON.stringify(process.env.LINE_CHANNEL_ID),
    LINE_REDIRECT_URI: JSON.stringify(process.env.LINE_REDIRECT_URI),
    LINE_STATE: JSON.stringify(process.env.LIEN_STATE),
    FACEBOOK_APP_ID: JSON.stringify(process.env.FACEBOOK_APP_ID),
  },
  production: {
    LAMBDA_ENV: JSON.stringify(process.env.LAMBDA_ENV),
    API_GATEWAY_GRAPHQL: JSON.stringify(process.env.API_GATEWAY_GRAPHQL),
    AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN),
    AUTH0_CLIENT_ID: JSON.stringify(process.env.AUTH0_CLIENT_ID),
    AUTH0_REDIRECT: JSON.stringify(process.env.AUTH0_REDIRECT),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    PORT: JSON.stringify(process.env.PORT),
    DEPLOY_URL: JSON.stringify(process.env.DEPLOY_URL),
    RECAPTCHA_KEY: JSON.stringify(process.env.RECAPTCHA_KEY),
    LINE_CHANNEL_ID: JSON.stringify(process.env.LINE_CHANNEL_ID),
    LINE_REDIRECT_URI: JSON.stringify(process.env.LINE_REDIRECT_URI),
    LINE_STATE: JSON.stringify(process.env.LIEN_STATE),
    FACEBOOK_APP_ID: JSON.stringify(process.env.FACEBOOK_APP_ID),
  },
};
