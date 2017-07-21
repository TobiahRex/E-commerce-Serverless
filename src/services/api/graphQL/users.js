import { create } from 'apisauce';

const {
  NODE_ENV,
  LAMBDA_ENV,
  GRAPHQL_PORT,
  API_GATEWAY_GRAPHQL,
} = process.env;

const graphqlURL = NODE_ENV === 'development' ? `http://localhost:${GRAPHQL_PORT}/graphql` : `${API_GATEWAY_GRAPHQL}/${LAMBDA_ENV}/graphql`;

if (!graphqlURL) throw new Error(`Cannot create API: "graphqlURL" = ${graphqlURL}.`);
console.info('USERS Graphql API: ', graphqlURL); // eslint-disable-line

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
    order: { cart },
    profile: {
      name,
      pictures,
      authentication,
      authenticationLogins,
      authenticationAuth0Identities,
      contactInfoLocation,
      contactInfoDevices,
      contactInfoSocialNetworks,
      contactInfo,
      shopping,
      permissions,
      userStory,
      socialProfileBlob,
    },
  }) => api.post('', {
    query: `mutation LoginOrRegister(
      $auth0Id: String!
      $loginType: String!
      $name: UserNameInput!
      $pictures: UserPictureInput!
      $authentication: UserAuthenticationInput!
      $authenticationLogins: [UserLastLoginInput]!
      $authenticationAuth0Identities: [UserAuth0IdentitiesInput]!
      $contactInfo: UserContactInfoInput!
      $contactInfoLocation: UserLocationInput!
      $contactInfoDevices: [UserDevicesInput]!
      $contactInfoSocialNetworks: [UserSocialNetworkInput]!
      $shopping: UserShoppingInput!
      $shoppingCart: [UserCartInput]!
      $permissions: UserPermissionsInput!
      $userStory: UserStoryInput!
      $socialProfileBlob: UserSocialProfileBlobInput!
    ) {
      LoginOrRegister(
        auth0Id: $auth0Id
        loginType: $loginType
        name: $name
        pictures: $pictures
        authentication: $authentication
        authenticationLogins: $authenticationLogins
        authenticationAuth0Identities: $authenticationAuth0Identities
        contactInfo: $contactInfo
        contactInfoLocation: $contactInfoLocation
        contactInfoDevices: $contactInfoDevices
        contactInfoSocialNetworks: $contactInfoSocialNetworks
        shopping: $shopping
        shoppingCart: $shoppingCart
        permissions: $permissions
        userStory: $userStory
        socialProfileBlob: $socialProfileBlob
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
          logins {
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
            nicotineStrength
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
    variables: {
      auth0Id,
      loginType,
      name,
      pictures,
      authentication,
      authenticationLogins,
      authenticationAuth0Identities,
      contactInfo,
      contactInfoLocation,
      contactInfoDevices,
      contactInfoSocialNetworks,
      shopping,
      shoppingCart: cart,
      permissions,
      userStory,
      socialProfileBlob,
    },
  });

  const FetchUserProfile = id => api.post('', {
    query: `
      query FetchUserProfile($id: ID!) {
        FetchUserProfile(id: $id) {
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
            logins {
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
    variables: {
      id,
    },
  });

  return {
    LoginOrRegister,
    FetchUserProfile,
  };
};
export default { createAPI };
