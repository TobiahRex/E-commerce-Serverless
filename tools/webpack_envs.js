import dotenv from 'dotenv';

dotenv.load({ silent: true });

export default {
  development: {
    GRAPHQL_PORT: JSON.stringify(process.env.GRAPHQL_PORT),
    AWS_MONGO_URI_DEV: JSON.stringify(process.env.AWS_MONGO_URI_DEV),
    AWS_GRAPHQL_DEV: JSON.stringify(process.env.AWS_GRAPHQL_DEV),
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
    AWS_MONGO_URI_PROD: JSON.stringify(process.env.AWS_MONGO_URI_PROD),
    AWS_GRAPHQL_PROD: JSON.stringify(process.env.AWS_GRAPHQL_PROD),
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
