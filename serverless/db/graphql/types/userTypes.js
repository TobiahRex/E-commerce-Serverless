import {
  GraphQLNonNull as NonNull,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,
  GraphQLInputObjectType as InputObject,
} from 'graphql';

const UserTypes = {
  rootType: new ObjectType({
    name: 'RootUserType',
    fields: () => ({
      name: {
        type: new ObjectType({
          name: 'UserNameObject',
          description: 'Users name object.',
          fields: {
            first: { type: StringType },
            last: { type: StringType },
            display: { type: StringType },
          },
        }),
      },
      authentication: {
        type: new ObjectType({
          name: 'UserAuthenticationObject',
          description: 'Authentication information for user.',
          fields: () => ({
            lastLogin: { type: StringType },
            signedUp: { type: StringType },
            registered: { type: StringType },
            password: { type: StringType },
            avatar: { type: StringType },
          }),
        }),
      },
      contactInfo: {
        type: new ObjectType({
          name: 'UserContanctInfoObject',
          description: 'Geolocation information for user.',
          fields: () => ({
            email: { type: StringType },
            phone: { type: StringType },
            location: {
              type: new ObjectType({
                name: 'UserGeolocationObject',
                fields: {
                  ipAddress: { type: StringType },
                  lat: { type: StringType },
                  long: { type: StringType },
                  country: { type: StringType },
                },
              }),
            },
          }),
        }),
      },
      permissions: {
        type: new ObjectType({
          name: 'UserPermissionsObject',
          description: 'Permissions granted for user.',
          fields: () => ({
            role: { type: StringType },
          }),
        }),
      },
      userStory: {
        type: new ObjectType({
          name: 'UserStoryObject',
          description: 'Bio information for user.',
          fields: () => ({
            age: { type: IntType },
            birthday: { type: StringType },
            bio: { type: StringType },
          }),
        }),
      },
    }),
  }),
  mutation: {
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
                age: { type: IntType },
                birthday: { type: StringType },
                bio: { type: StringType },
              }),
            }),
          ),
        },
      },
    },
  },
};
export default UserTypes;
