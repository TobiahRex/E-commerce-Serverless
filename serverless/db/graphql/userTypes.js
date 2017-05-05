import {
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLInputObjectType as InputObject,
} from 'graphql';

const UserTypes = {
  rootType: {
    name: new InputObject({
      name: 'UserNameObject',
      description: 'Users name object.',
      fields: () => ({
        first: { type: NonNull(StringType) },
        last: { type: NonNull(StringType) },
        display: { type: NonNull(StringType) },
      }),
    }),
    authentication: new InputObject({
      name: 'UserAuthenticationObject',
      description: 'Authentication information for user.',
      fields: () => ({
        lastLogin: { type: NonNull(StringType) },
        signedUp: { type: NonNull(StringType) },
        registered: { type: NonNull(StringType) },
        password: { type: StringType },
        avatar: { type: StringType },
      }),
    }),
    contactInfo: new InputObject({
      name: 'UserContanctInfoObject',
      email: { type: StringType },
      phone: { type: StringType },
      location: new InputObject({
        name: 'UserInputGeolocationObject',
        description: 'Geolocation information for user.',
        fields: () => ({
          ipAddress: { type: StringType },
          lat: { type: StringType },
          long: { type: StringType },
          country: { type: StringType },
        }),
      }),
    }),
    permissions: new InputObject({
      name: 'UserPermissionsObject',
      description: 'Permissions granted for user.',
      fields: () => ({
        role: { type: StringType },
      }),
    }),
    userStory: new InputObject({
      name: 'UserStoryObject',
      description: 'Bio information for user.',
      fields: () => ({
        age: { type: IntType },
        birthday: { type: StringType },
        bio: { type: StringType },
      }),
    }),
  },
  createUser: {
    name: new InputObject({
      name: 'UserInputNameObject',
      description: 'Object: Users name.',
      fields: () => ({
        first: { type: NonNull(StringType) },
        last: { type: NonNull(StringType) },
        display: { type: NonNull(StringType) },
      }),
    }),
    authentication: new InputObject({
      name: 'UserInputAuthenticationObject',
      description: 'Object: Auth info for user.',
      fields: () => ({
        lastLogin: { type: NonNull(StringType) },
        signedUp: { type: NonNull(StringType) },
        registered: { type: NonNull(StringType) },
        password: { type: StringType },
        avatar: { type: StringType },
      }),
    }),
    contactInfo: new InputObject({
      name: 'UserInputContactInfoObject',
      description: 'Object: Contanct info for user.',
      email: { type: StringType },
      phone: { type: StringType },
      location: new InputObject({
        name: 'UserInputGeolocationObject',
        description: 'Object: Geolocation information for user.',
        fields: () => ({
          ipAddress: { type: StringType },
          lat: { type: StringType },
          long: { type: StringType },
          country: { type: StringType },
        }),
      }),
    }),
    permissions: new InputObject({
      name: 'UserInputPermissionsObject',
      description: 'Permissions granted for user.',
      fields: () => ({
        role: { type: StringType },
      }),
    }),
    userStory: new InputObject({
      name: 'UserInputStoryObject',
      description: 'Bio information for user.',
      fields: () => ({
        age: { type: IntType },
        birthday: { type: StringType },
        bio: { type: StringType },
      }),
    }),
  },
};
export default UserTypes;
