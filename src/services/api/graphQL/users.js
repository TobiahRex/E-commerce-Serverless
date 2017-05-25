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
    id,
    name,
    authentication,
    contactInfo,
    permissions,
    userStory,
  }) => api.post('', {
    mutation: `createUser(
      id: ${id}
      name: {
        first: ${name.first}
        last: ${name.last}
        display: ${name.display}
      },
      authentication: {
        lastLogin: ${authentication.lastLogin}
        signedUp: ${authentication.signedUp}
        registered: ${authentication.registered}
        avatar: ${authentication.avatar}
      },
      contactInfo: {
        email: ${contactInfo.email}
        phone: ${contactInfo.phone}
        location: {
          ipAddress: ${contactInfo.location.ipAddress}
          lat: ${contactInfo.location.lat}
          long: ${contactInfo.location.long}
          country: ${contactInfo.location.country}
        }
      },
      permissions: {
        role: ${permissions.role}
      },
      userStory: {
        age: ${userStory.age}
        birthday: ${userStory.birthday}
        bio: ${userStory.bio}
        gender: ${userStory.gender}
      }
    ) {
      _id
      name {
        first
        last
        display
      }
      authentication {
        lastLogin
        signedUp
        registered
        password
        avatar
      }
      contactInfo {
        email
        phone
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
    }`,
    variables: {

    },
  });

  return {
    LoginOrRegister,
  };
};
export default { createAPI };
