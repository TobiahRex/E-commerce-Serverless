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
    mutation: `mutation LoginOrRegister {
      LoginOrRegister(
        loginType: ${loginType}
        auth0Id: ${auth0Id}
        name: {
          first: ${name.first}
          last: ${name.last}
          display: ${name.display}
        }
        pictures: {
          small: ${pictures.small}
          large: ${pictures.large}
        }
        authentication: {
          signedUp: ${authentication.signedup}
          password: ${authentication.password}
          createdAt: ${authentication.createdAt}
          totalLogins: ${authentication.totalLogins}
          lastLogin: [{
            date: ${authentication.lastLogin[0].date}
            device: ${authentication.lastLogin[0].device}
          }]
          ageVerified: true
          auth0Identities: [{
            provider: ${authentication.auth0Identities[0].provider}
            user_id: ${authentication.auth0Identities[0].user_id}
            connection: ${authentication.auth0Identities[0].connection}
            isSocial: ${authentication.auth0Identities[0].isSocial}
          }]
        }
        contactInfo: {
          email: ${contactInfo.email}
          phone: ${contactInfo.phone}
          locale: ${contactInfo.locale}
          location: {
            ipAddress: ${contactInfo.location.ipAddress}
            lat: ${contactInfo.location.lat}
            long: ${contactInfo.location.long}
            country: ${contactInfo.location.country}
          }
          devices: [{
            hardware: "Galaxy S7"
            os: "Android"
          }]
          socialNetworks: [{
            name: "Facebook",
            link: "http://whatever.com"
          }]
        }
        shopping: {
          cart: []
          transactions: []
        }
        permissions: {
          role: [user]
        }
        userStory: {
          age: 26
          birthday: "19, Jan 1989"
          bio: ""
          gender: "male"
        }
        socialProfileBlob: {
          line: ""
          facebook: ""
          google: ""
          twitter: ""
          linkedin: ""
        }
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

  return {
    LoginOrRegister,
  };
};
export default { createAPI };
