import { create } from 'apisauce';

let graphqlURL;
if (process.env.NODE_ENV === 'production') {
  graphqlURL = `${process.env.AWS_GRAPHQL_PROD}`;
} else {
  graphqlURL = `${process.env.AWS_GRAPHQL_DEV}`;
}

const createAPI = () => {
  const api = create({
    baseURL: graphqlURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'omit',
  });

  const findOrCreateUser = ({
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
      }
    }`,
    dbType: 'User',
  });

  return {
    findOrCreateUser,
  };
};
export default { createAPI };
