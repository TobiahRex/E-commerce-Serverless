import dotenv from 'dotenv';

dotenv.load({ silent: true });

export default {
  development: {
    AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN),
    AUTH0_CLIENT_ID: JSON.stringify(process.env.AUTH0_CLIENT_ID),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    PORT: JSON.stringify(3000),
    BASE_URL: JSON.stringify(process.env.BASE_URL),
  },
  production: {
    AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN),
    AUTH0_CLIENT_ID: JSON.stringify(process.env.AUTH0_CLIENT_ID),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    PORT: JSON.stringify(process.env.PORT),
    DEPLOY_URL: JSON.stringify(process.env.DEPLOY_URL),
  },
};
