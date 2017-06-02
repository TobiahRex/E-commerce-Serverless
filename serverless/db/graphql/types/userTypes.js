import {
  GraphQLID as MongoID,
  GraphQLInt as IntType,
  GraphQLList as ListType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BoolType,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,
  GraphQLInputObjectType as InputObject,
} from 'graphql';

const rootType = new ObjectType({
  name: 'RootUserType',
  description: 'A User.',
  fields: () => ({
    _id: {
      description: 'The ID of the User.',
      type: new NonNull(MongoID),
    },
    name: {
      description: 'The Given, Family, & Display name for the user.',
      type: new ObjectType({
        name: 'UserName',
        fields: () => ({
          first: {
            description: 'The first name of the user.',
            type: StringType,
          },
          last: {
            description: 'The last name of the user.',
            type: StringType,
          },
          display: {
            description: 'The display name of the user.',
            type: StringType,
          },
        }),
      }),
    },
    pictures: {
      description: 'Pictures of the user in different sizes.',
      type: new ObjectType({
        name: 'UserPicture',
        fields: () => ({
          small: {
            description: 'Small user image used for the Navbar avatar.',
            type: StringType,
          },
          large: {
            description: 'Large user image used for the user dashboard.',
            type: StringType,
          },
          default: {
            description: 'The default user avatar if none is supplied.',
            type: StringType,
          },
        }),
      }),
    },
    authentication: {
      description: 'Authentication information for user.',
      type: new ObjectType({
        name: 'UserAuthentication',
        fields: () => ({
          signedUp: {
            description: 'The Date this user first signed up for newsletters.',
            type: StringType,
          },
          password: {
            description: 'This user\'s password if using email signup.',
            type: StringType,
          },
          createdAt: {
            description: 'The date this user was created.',
            type: StringType,
          },
          totalLogins: {
            description: 'The number of times this user has logged in.',
            type: IntType,
          },
          logins: {
            description: 'The last time this user logged in.',
            type: new ListType(
              new ObjectType({
                name: 'UserLastLogin',
                fields: () => ({
                  date: {
                    description: 'The Date the user last logged in.',
                    type: StringType,
                  },
                  device: {
                    description: 'The type of device the user logged in with.',
                    type: StringType,
                  },
                }),
              }),
            ),
          },
          ageVerified: {
            description: 'Verification if the user is at least 20 years of age.',
            type: BoolType,
          },
          auth0Identities: {
            description: 'An array of identity object from Auth0 for each different type of login used by the user.',
            type: new ListType(
              new ObjectType({
                name: 'UserAuth0Identities',
                fields: () => ({
                  provider: {
                    description: 'The Social-Login Provider.',
                    type: StringType,
                  },
                  user_id: {
                    description: 'The Auth0 User ID for this login type.',
                    type: StringType,
                  },
                  connection: {
                    description: 'The type of Auth0 connection that was used.',
                    type: StringType,
                  },
                  isSocial: {
                    description: 'Verifies that a Social Login type was used.',
                    type: BoolType,
                  },
                }),
              }),
            ),
          },
        }),
      }),
    },
    contactInfo: {
      description: 'Contact info & GeoLocation info for user.',
      type: new ObjectType({
        name: 'UserContanctInfo',
        fields: () => ({
          email: {
            description: 'The email for this user.',
            type: StringType,
          },
          phone: {
            description: 'The phone number for this user.',
            type: StringType,
          },
          locale: {
            description: 'The users language of choice as determined by the Social Login provider or their preference.',
            type: StringType,
          },
          timezone: {
            description: 'The users local Time Zone - Retrieved from Social Login Provider.',
            type: IntType,
          },
          location: {
            description: 'IP address, lat, long, & country code. for this user from their last login.',
            type: new ObjectType({
              name: 'UserGeolocation',
              fields: () => ({
                ipAddress: {
                  description: 'IP address this user last used.',
                  type: StringType,
                },
                lat: {
                  description: 'Latitude coord. this user last logged in from.',
                  type: StringType,
                },
                long: {
                  description: 'Longitude coord. this user last logged in from.',
                  type: StringType,
                },
                country: {
                  description: 'Country code this user last logged in from.',
                  type: StringType,
                },
              }),
            }),
          },
          devices: {
            description: 'The mobile devices used by a user to connect to Social Apps - From Social Login Providers Meta Data.',
            type: new ListType(
              new ObjectType({
                name: 'UserDevices',
                fields: () => ({
                  hardware: {
                    description: 'The mobile Phone type.',
                    type: StringType,
                  },
                  os: {
                    description: 'The operating system for the mobile device.',
                    type: StringType,
                  },
                }),
              }),
            ),
          },
          socialNetworks: {
            description: 'An array of Social Networks used by the user + their respective account links.',
            type: new ListType(
              new ObjectType({
                name: 'UserSocialNetwork',
                fields: () => ({
                  name: {
                    description: 'The name of the Social Network.',
                    type: StringType,
                  },
                  link: {
                    description: 'The Social Network Link for this users account.',
                    type: StringType,
                  },
                }),
              }),
            ),
          },
        }),
      }),
    },
    shopping: {
      description: 'The Users Shopping Details: What\'s currently in the Users cart. What transactions have they made.',
      type: new ObjectType({
        name: 'UserShopping',
        fields: () => ({
          cart: {
            description: 'The Users shopping cart.',
            type: new ListType(
              new ObjectType({
                name: 'UserCart',
                fields: () => ({
                  qty: {
                    description: 'The quantity of items of this product.',
                    type: IntType,
                  },
                  nicotineStrength: {
                    description: 'The nicotine strength of this product.',
                    type: IntType,
                  },
                  product: {
                    description: 'The Mongo ObjectID for this product.',
                    type: MongoID,
                  },
                }),
              }),
            ),
          },
          transactions: {
            description: 'The date this user first signed up for newsletters - Typically coincides with users first purchase.',
            type: new ListType(StringType),
          },
        }),
      }),
    },
    permissions: {
      description: 'Authorization permissions granted for user.',
      type: new ObjectType({
        name: 'UserPermissions',
        fields: () => ({
          role: {
            description: 'The authorization role for this user.',
            type: StringType,
          },
        }),
      }),
    },
    userStory: {
      description: 'Bio information for new user.',
      type: new ObjectType({
        name: 'UserInputStory',
        fields: () => ({
          age: {
            description: 'The age of this new user.',
            type: IntType,
          },
          birthday: {
            description: 'The birthday of this new user.',
            type: StringType,
          },
          bio: {
            description: 'The biography of this new user.',
            type: StringType,
          },
          gender: {
            description: 'The User\'s gender.',
            type: StringType,
          },
        }),
      }),
    },
    marketHero: {
      description: 'The User\'s Market Hero Meta-Data.',
      type: new ObjectType({
        name: 'UserMarketHero',
        fields: () => ({
          tags: {
            description: 'Array of objects, containing all the "Tags" that have been added to this User\'s Market Hero profile, and the respective date.',
            type: new ListType(
              new ObjectType({
                name: 'UserMarketHeroTags',
                fields: () => ({
                  name: {
                    description: 'The name of the "Tag".',
                    type: StringType,
                  },
                  date: {
                    description: 'The Date this "Tag" was added the User\'s Market Hero profile.',
                    type: StringType,
                  },
                }),
              }),
            ),
          },
        }),
      }),
    },
    socialProfileBlob: {
      description: 'The social network profile information for this user.  Captured at Registration.',
      type: new ObjectType({
        name: 'UserSocialProfileBlob',
        fields: () => ({
          line: {
            description: 'The Social Profile for the User\'s LINE account.',
            type: StringType,
          },
          facebook: {
            description: 'The Social Profile for the User\'s Facebook account.',
            type: StringType,
          },
          google: {
            description: 'The Social Profile for the User\'s Google account.',
            type: StringType,
          },
          twitter: {
            description: 'The Social Profile for the User\'s Twitter account.',
            type: StringType,
          },
          linkedin: {
            description: 'The Social Profile for the User\'s Linkedin account.',
            type: StringType,
          },
        }),
      }),
    },
  }),
});
const queries = {
  FetchUserProfile: {
    type: rootType,
    args: {
      id: {
        description: 'The Users Mongo ID. ',
        type: new NonNull(MongoID),
      },
    },
    resolve: (_, { id }, { User }) => User.fetchUserProfile(id),
  },
};
const mutations = {
  LoginOrRegister: {
    type: rootType,
    description: 'Create new User.',
    args: {
      auth0Id: {
        description: 'The Auth0 User ID to cross check with all Mongo User ID\'s to Login and if no match is found, create a new User.',
        type: new NonNull(StringType),
      },
      loginType: {
        description: 'The Social Network used to login or register.',
        type: new NonNull(StringType),
      },
      name: {
        description: 'The Given, Family, & Display name for the new user.',
        type: new NonNull(
          new InputObject({
            name: 'UserNameInput',
            fields: () => ({
              first: {
                description: 'The first name of the new user.',
                type: new NonNull(StringType),
              },
              last: {
                description: 'The last name of the new user.',
                type: new NonNull(StringType),
              },
              display: {
                description: 'The display name of the new user.',
                type: new NonNull(StringType),
              },
            }),
          }),
        ),
      },
      pictures: {
        description: 'Pictures of the user in different sizes.',
        type: new NonNull(
          new InputObject({
            name: 'UserPictureInput',
            fields: () => ({
              small: {
                description: 'Small user image used for the Navbar avatar.',
                type: StringType,
              },
              large: {
                description: 'Large user image used for the user dashboard.',
                type: StringType,
              },
            }),
          }),
        ),
      },
      authentication: {
        description: 'Authentication information for user.',
        type: new NonNull(
          new InputObject({
            name: 'UserAuthenticationInput',
            fields: () => ({
              signedUp: {
                description: 'The Date this new user first signed up for newsletters.',
                type: StringType,
              },
              password: {
                description: 'This new user\'s password if using email signup.',
                type: StringType,
              },
              createdAt: {
                description: 'The date this new user was created.',
                type: StringType,
              },
              totalLogins: {
                description: 'The number of times this new user has logged in.',
                type: IntType,
              },
              ageVerified: {
                description: 'Verification if the user is at least 20 years of age.',
                type: new NonNull(BoolType),
              },
            }),
          }),
        ),
      },
      authenticationLogins: {
        description: 'The last time this new user logged in.',
        type: new NonNull(
          new ListType(
            new InputObject({
              name: 'UserLastLoginInput',
              fields: () => ({
                date: {
                  description: 'The Date the user last logged in.',
                  type: StringType,
                },
                device: {
                  description: 'The type of device the user logged in with.',
                  type: StringType,
                },
              }),
            }),
          ),
        ),
      },
      authenticationAuth0Identities: {
        description: 'An array of identity object from Auth0 for each different type of login used by the user.',
        type: new NonNull(
          new ListType(
            new InputObject({
              name: 'UserAuth0IdentitiesInput',
              fields: () => ({
                provider: {
                  description: 'The Social-Login Provider.',
                  type: StringType,
                },
                user_id: {
                  description: 'The Auth0 User ID for this login type.',
                  type: StringType,
                },
                connection: {
                  description: 'The type of Auth0 connection that was used.',
                  type: StringType,
                },
                isSocial: {
                  description: 'Verifies that a Social Login type was used.',
                  type: BoolType,
                },
              }),
            }),
          ),
        ),
      },
      contactInfo: {
        description: 'Contact info & GeoLocation info for user.',
        type: new NonNull(
          new InputObject({
            name: 'UserContactInfoInput',
            fields: () => ({
              email: {
                description: 'The email for this user.',
                type: StringType,
              },
              phone: {
                description: 'The phone number for this user.',
                type: StringType,
              },
              locale: {
                description: 'The users language of choice as determined by the Social Login provider or their preference.',
                type: StringType,
              },
              timezone: {
                description: 'The users local Time Zone - Retrieved from Social Login Providers.',
                type: IntType,
              },
            }),
          }),
        ),
      },
      contactInfoLocation: {
        description: 'IP address, lat, long, & country code. for this user from their last login.',
        type: new NonNull(
          new InputObject({
            name: 'UserLocationInput',
            fields: () => ({
              ipAddress: {
                description: 'IP address this user last used.',
                type: new NonNull(StringType),
              },
              lat: {
                description: 'Latitude coord. this user last logged in from.',
                type: new NonNull(StringType),
              },
              long: {
                description: 'Longitude coord. this user last logged in from.',
                type: new NonNull(StringType),
              },
              country: {
                description: 'Country code this user last logged in from.',
                type: new NonNull(StringType),
              },
            }),
          }),
        ),
      },
      contactInfoDevices: {
        description: 'The mobile devices used by a user to connect to Social Apps - From Social Login Providers Meta Data.',
        type: new ListType(
          new InputObject({
            name: 'UserDevicesInput',
            fields: () => ({
              hardware: {
                description: 'The mobile Phone type.',
                type: StringType,
              },
              os: {
                description: 'The operating system for the mobile device.',
                type: StringType,
              },
            }),
          }),
        ),
      },
      contactInfoSocialNetworks: {
        description: 'An array of Social Networks used by the user + their respective account links.',
        type: new NonNull(
          new ListType(
            new InputObject({
              name: 'UserSocialNetworkInput',
              fields: () => ({
                name: {
                  description: 'The name of the Social Network.',
                  type: StringType,
                },
                link: {
                  description: 'The Social Network Link for this users account.',
                  type: StringType,
                },
              }),
            }),
          ),
        ),
      },
      shopping: {
        description: 'The Users Shopping Details: What\'s currently in the Users cart. What transactions have they made.',
        type: new NonNull(
          new InputObject({
            name: 'UserShoppingInput',
            fields: () => ({
              transactions: {
                description: 'The date this user first signed up for newsletters - Typically coincides with users first purchase.',
                type: new ListType(StringType),
              },
            }),
          }),
        ),
      },
      shoppingCart: {
        description: 'The Users shopping cart.',
        type: new NonNull(
          new ListType(
            new InputObject({
              name: 'UserCartInput',
              fields: () => ({
                qty: {
                  description: 'The quantity of items of this product.',
                  type: IntType,
                },
                nicotineStrength: {
                  description: 'The nicotine strength of this product.',
                  type: IntType,
                },
                product: {
                  description: 'The Mongo ObjectID for this product.',
                  type: MongoID,
                },
              }),
            }),
          ),
        ),
      },
      permissions: {
        description: 'Authorization permissions granted for user.',
        type: new NonNull(
          new InputObject({
            name: 'UserPermissionsInput',
            fields: () => ({
              role: {
                description: 'The authorization role for this user.',
                type: new NonNull(StringType),
              },
            }),
          }),
        ),
      },
      userStory: {
        description: 'Bio information for new user.',
        type: new NonNull(
          new InputObject({
            name: 'UserStoryInput',
            fields: () => ({
              age: {
                description: 'The age of this new user.',
                type: IntType,
              },
              birthday: {
                description: 'The birthday of this new user.',
                type: StringType,
              },
              bio: {
                description: 'The biography of this new user.',
                type: StringType,
              },
              gender: {
                description: 'The User\'s gender.',
                type: StringType,
              },
            }),
          }),
        ),
      },
      socialProfileBlob: {
        description: 'The users collection of social profiles from their Social Login accounts.',
        type: new NonNull(
          new InputObject({
            name: 'UserSocialProfileBlobInput',
            fields: () => ({
              line: {
                description: 'The Social Profile for the User\'s LINE account.',
                type: StringType,
              },
              facebook: {
                description: 'The Social Profile for the User\'s Facebook account.',
                type: StringType,
              },
              google: {
                description: 'The Social Profile for the User\'s Google account.',
                type: StringType,
              },
              twitter: {
                description: 'The Social Profile for the User\'s Twitter account.',
                type: StringType,
              },
              linkedin: {
                description: 'The Social Profile for the User\'s Linkedin account.',
                type: StringType,
              },
            }),
          }),
        ),
      },
    },
    resolve: (_, args, { User }) => User.loginOrRegister(args),
  },
  AddToMemberCart: {
    type: rootType,
    description: 'Add products to the members cart.',
    args: {
      userId: {
        description: 'The User\'s Mongo ObjectId.',
        type: new NonNull(MongoID),
      },
      qty: {
        description: 'The quantity of products to add.',
        type: new NonNull(IntType),
      },
      nicotineStrength: {
        description: 'The nicotine strength of the product to add.',
        type: new NonNull(IntType),
      },
      product: {
        description: 'The Mongo ObjectId of the product to add.',
        type: new NonNull(MongoID),
      },
    },
    resolve: (_, args, { User }) => User.addToMemberCart(args),
  },
  DeleteFromMemberCart: {
    type: rootType,
    description: 'Delete a Product from the Users cart.',
    args: {
      productId: {
        description: 'The Product Mongo Id to delete.',
        type: new NonNull(MongoID),
      },
      userId: {
        description: 'The User Mongo Id to perform the operation on.',
        type: new NonNull(MongoID),
      },
    },
    resolve: (_, args, { User }) => User.deleteFromCart(args),
  },
  EditToMemberCart: {
    type: rootType,
    description: 'Update products in the members cart.',
    args: {
      userId: {
        description: 'The User\'s Mongo ObjectId.',
        type: new NonNull(MongoID),
      },
      products: {
        description: 'A list of Products to be inserted into the users DB cart.',
        type: new ListType(
          new InputObject({
            name: 'ProductsInput',
            fields: () => ({
              qty: {
                description: 'The quantity of products to update.',
                type: new NonNull(IntType),
              },
              nicotineStrength: {
                description: 'The nicotine strength of the product to update.',
                type: new NonNull(IntType),
              },
              product: {
                description: 'The Mongo ObjectId of the product to update.',
                type: new NonNull(MongoID),
              },
            }),
          }),
        ),
      },
    },
    resolve: (_, args, { User }) => User.editToMemberCart(args),
  },
};
const UserTypes = {
  rootType,
  queries,
  mutations,
};
export default UserTypes;
