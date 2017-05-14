import {
  GraphQLID as MongoID,
  GraphQLNonNull as NonNull,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,
  GraphQLInputObjectType as InputObject,
} from 'graphql';

const UserTypes = {
  rootType: new ObjectType({
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
            email: { type: StringType },
            phone: { type: StringType },
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
        description: 'Biography info. for user.',
        type: new ObjectType({
          name: 'UserStoryObject',
          fields: () => ({
            age: { type: IntType },
            birthday: { type: StringType },
            bio: { type: StringType },
          }),
        }),
      },
    }),
  }),
  mutations: {
    createUser: {
      args: {
        name: {
          description: 'Object: Users name.',
          type: new NonNull(
            new InputObject({
              name: 'UserInputNameObject',
              fields: () => ({
                first: { type: StringType },
                last: { type: StringType },
                display: { type: StringType },
              }),
            }),
          ),
        },
        authentication: {
          description: 'Object: Auth info for user.',
          type: new NonNull(
            new InputObject({
              name: 'UserInputAuthenticationObject',
              fields: () => ({
                lastLogin: { type: StringType },
                signedUp: { type: StringType },
                registered: { type: StringType },
                password: { type: StringType },
                avatar: { type: StringType },
              }),
            }),
          ),
        },
        contactInfo: {
          description: 'Object: Contanct info for user.',
          type: new NonNull(
            new InputObject({
              name: 'UserInputContactInfoObject',
              fields: () => ({
                email: { type: StringType },
                phone: { type: StringType },
                location: {
                  type: new NonNull(
                    new InputObject({
                      name: 'UserInputGeolocationObject',
                      description: 'Object: Geolocation information for user.',
                      fields: () => ({
                        ipAddress: { type: StringType },
                        lat: { type: StringType },
                        long: { type: StringType },
                        country: { type: StringType },
                      }),
                    }),
                  ),
                },
              }),
            }),
          ),
        },
        permissions: {
          description: 'Object: Permissions granted for user.',
          type: new NonNull(
            new InputObject({
              name: 'UserInputPermissionsObject',
              fields: () => ({
                role: { type: StringType },
              }),
            }),
          ),
        },
        userStory: {
          description: 'Object: Bio information for user.',
          type: new NonNull(
            new InputObject({
              name: 'UserInputStoryObject',
              fields: () => ({
                age: {
                  description: '',
                  type: IntType,
                },
                birthday: {
                  description: '',
                  type: StringType,
                },
                bio: {
                  description: '',
                  type: StringType,
                },
              }),
            }),
          ),
        },
      },
    },
  },
};
export default UserTypes;
