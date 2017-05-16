import {
  GraphQLID as MongoID,
  GraphQLNonNull as NonNull,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,
  GraphQLInputObjectType as InputObject,
} from 'graphql';

import UserModel from '../../mongo/models/user';

const rootType = new ObjectType({
  name: 'RootUserType',
  description: 'A User.',
  fields: () => ({
    _id: {
      description: 'The ID of the User.',
      type: new NonNull(MongoID),
    },
    name: {
      description: 'Object: The First & Last name for the User.',
      type: new ObjectType({
        name: 'UserNameObject',
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
    authentication: {
      description: 'Authentication information for user.',
      type: new ObjectType({
        name: 'UserAuthenticationObject',
        fields: () => ({
          lastLogin: {
            description: 'The last time this user logged in.',
            type: StringType,
          },
          signedUp: {
            description: 'The date this user first signed up for newsletters - Typically coincides with users first purchase.',
            type: StringType,
          },
          registered: {
            description: 'The date this user first became a member.',
            type: StringType,
          },
          password: {
            description: 'This user\'s password if using email signup.',
            type: StringType,
          },
          avatar: {
            description: 'This user\'s profile avatar.',
            type: StringType,
          },
        }),
      }),
    },
    contactInfo: {
      description: 'Contact info & GeoLocation info for user.',
      type: new ObjectType({
        name: 'UserContanctInfoObject',
        fields: () => ({
          email: {
            description: 'The email for this user.',
            type: StringType,
          },
          phone: {
            description: 'The phone number for this user.',
            type: StringType,
          },
          location: {
            description: 'IP address, lat, long, & country code. for this user from their last login.',
            type: new ObjectType({
              name: 'UserGeolocationObject',
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
        }),
      }),
    },
    permissions: {
      description: 'Authorization permissions granted for user.',
      type: new ObjectType({
        name: 'UserPermissionsObject',
        fields: () => ({
          role: {
            description: 'The authorization role for this user.',
            type: StringType,
          },
        }),
      }),
    },
    userStory: {
      description: 'Object: Bio information for new user.',
      type: new ObjectType({
        name: 'UserInputStoryObject',
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
        }),
      }),
    },
  }),
});
const mutations = {
  createUser: {
    type: rootType,
    description: 'Create new User.',
    args: {
      name: {
        description: 'Object: The First & Last name for the new user.',
        type: new NonNull(
          new InputObject({
            name: 'NewUserNameObject',
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
      authentication: {
        description: 'Authentication information for new user.',
        type: new NonNull(
          new InputObject({
            name: 'NewUserAuthenticationObject',
            fields: () => ({
              lastLogin: {
                description: 'The last time this new user logged in.',
                type: StringType,
              },
              signedUp: {
                description: 'The date this new user first signed up for newsletters - Typically coincides with users first purchase.',
                type: StringType,
              },
              registered: {
                description: 'The date this new user first became a member.',
                type: new NonNull(StringType),
              },
              password: {
                description: 'This new user\'s password if using email signup.',
                type: StringType,
              },
              avatar: {
                description: 'This new user\'s profile avatar.',
                type: StringType,
              },
            }),
          }),
        ),
      },
      contactInfo: {
        description: 'Contact info & GeoLocation info for new user.',
        type: new NonNull(
          new InputObject({
            name: 'NewUserContanctInfoObject',
            fields: () => ({
              email: {
                description: 'The email for this new user.',
                type: StringType,
              },
              phone: {
                description: 'The phone number for this new user.',
                type: StringType,
              },
              location: {
                description: 'IP address, lat, long, & country code. for this new user from their current login.',
                type: new NonNull(
                  new InputObject({
                    name: 'NewUserGeolocationObject',
                    fields: () => ({
                      ipAddress: {
                        description: 'IP address for this new user.',
                        type: StringType,
                      },
                      lat: {
                        description: 'Latitude coord. for this new user.',
                        type: StringType,
                      },
                      long: {
                        description: 'Longitude coord. for this new user.',
                        type: StringType,
                      },
                      country: {
                        description: 'Country code for this new user.',
                        type: StringType,
                      },
                    }),
                  }),
                ),
              },
            }),
          }),
        ),
      },
      permissions: {
        description: 'Authorization permissions for this new user.',
        type: new NonNull(
          new InputObject({
            name: 'NewUserInputPermissionsObject',
            fields: () => ({
              role: {
                description: 'Authorization role for this new user.',
                type: new NonNull(StringType),
              },
            }),
          }),
        ),
      },
      userStory: {
        description: 'Object: Bio information for new user.',
        type: new NonNull(
          new InputObject({
            name: 'NewUserInputStoryObject',
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
            }),
          }),
        ),
      },
    },
    resolve: (_, args) => UserModel.createUser(args),
  },
};
const UserTypes = {
  rootType,
  mutations,
};
export default UserTypes;
