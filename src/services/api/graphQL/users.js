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
  }) => {
    console.log(`mutation LoginOrRegister {
      LoginOrRegister(
        loginType: ${loginType}
        auth0Id: ${auth0Id}
        name: ${JSON.stringify({ ...name }, null, 2)}
        pictures: ${JSON.stringify({ ...pictures }, null, 2)}
        authentication: ${JSON.stringify({ ...authentication }, null, 2)}
        contactInfo: ${JSON.stringify({ ...contactInfo }, null, 2)}
        shopping: ${JSON.stringify({ ...shopping }, null, 2)}
        permissions: ${JSON.stringify({ ...permissions }, null, 2)}
        userStory: ${JSON.stringify({ ...userStory }, null, 2)}
        socialProfileBlob: ${JSON.stringify({ ...socialProfileBlob }, null, 2)}`);
    return api.post('', {
    mutation: `mutation LoginOrRegister {
      LoginOrRegister(
        loginType: ${loginType}
        auth0Id: ${auth0Id}
        name: ${JSON.stringify({ ...name }, null, 2)}
        pictures: ${JSON.stringify({ ...pictures }, null, 2)}
        authentication: ${JSON.stringify({ ...authentication }, null, 2)}
        contactInfo: ${JSON.stringify({ ...contactInfo }, null, 2)}
        shopping: ${JSON.stringify({ ...shopping }, null, 2)}
        permissions: ${JSON.stringify({ ...permissions }, null, 2)}
        userStory: ${JSON.stringify({ ...userStory }, null, 2)}
        socialProfileBlob: ${JSON.stringify({ ...socialProfileBlob }, null, 2)}
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
          lastLogin {
            date
            device
          }
          ageVerified
          auth0Identities {
            provider
            user_id
            connection
            isSocial
          }
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
          devices {
            hardware
            os
          }
          socialNetworks {
            name
            link
          }
        }
        permissions {
          role
        }
        shopping {
          cart {
            qty
            strength
            product
          }
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
        socialProfileBlob {
          line
          facebook
          google
          twitter
          linkedin
        }
      }
    }
  `,
  });
}

  return {
    LoginOrRegister,
  };
};
export default { createAPI };
