import { create } from 'apisauce';

const {
  NODE_ENV,
  GRAPHQL_PORT,
  LAMBDA_GRAPHQL,
} = process.env;
const graphqlURL = NODE_ENV === 'production' ? LAMBDA_GRAPHQL : `http://localhost:${GRAPHQL_PORT}/graphql`;

if (!graphqlURL) throw new Error(`Cannot create API: "graphqlURL" = ${typeof graphqlURL}.`);
console.info('graphqlURL: ', graphqlURL); // eslint-disable-line

const createAPI = () => {
  const api = create({
    baseURL: graphqlURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'omit',
  });

  const LoginOrRegister = ({
    auth0Id,
    loginType,
    profile: {
      name,
      pictures,
      authentication,
      contactInfo,
      shopping,
      permissions,
      userStory,
      socialProfileBlob,
    },
  }) => api.post('', {
    mutation: `mutation LoginOrRegister(
      $loginType: ${loginType}
      $auth0Id: ${auth0Id}
      $name: ${{ ...name }}
      $pictures: ${{ ...pictures }}
      $authentication: ${{ ...authentication }}
      $contactInfo: ${{ ...contactInfo }}
      $shopping: ${{ ...shopping }}
      $permissions: ${{ ...permissions }}
      $userStory: ${{ ...userStory }}
      $socialProfileBlob: ${{ ...socialProfileBlob }}
    ) {
      _id
      name {
        first
        last
        display
      }
      pictures {
        small
        large
        default
      }
      authentication {
        signedUp
        password
        createdAt
        totalLogins
        lastLogin
        ageVerified
        auth0Identities
      }
      contactInfo {
        email
        phone
        locale
        timezone
        location {
          ipAddress
          lat
          long
          country
        },
        devices
        socialNetworks
      }
      permissions {
        role
      }
      shopping {
        cart
        transactions
      }
      permissions {
        role
      }
      userStory {
        age
        birthday
        bio
        gender
      }
      socialProfile {
        line
        facebook
        google
        twitter
        linkedin
      }
    }`,
    variables: {
      loginType,
      auth0Id,
      name: { ...name },
      pictures: { ...pictures },
      authentication: { ...authentication },
      contactInfo: { ...contactInfo },
      shopping: { ...shopping },
      permissions: { ...permissions },
      userStory: { ...userStory },
      socialProfileBlob: { ...socialProfileBlob },
    },
  });

  return {
    LoginOrRegister,
  };
};
export default { createAPI };
