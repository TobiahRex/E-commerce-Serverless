import {
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLInputObjectType as InputObject,
} from 'graphql';

const UserTypes = {
  rootType: {
    name: new InputObject({
      name: 'UserInputNameObject',
      description: 'Users name object.',
      fields: () => ({
        first: { type: NonNull(StringType) },
        last: { type: NonNull(StringType) },
        display: { type: NonNull(StringType) },
      }),
    }),
    authentication: new InputObject({
      name: 'UserInputAuthenticationObject',
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
  createUserInput: {
    name: new InputObject({
      name: 'UserInputNameObject',
      description: 'Users name object.',
      fields: () => ({
        first: { type: NonNull(StringType) },
        last: { type: NonNull(StringType) },
        display: { type: NonNull(StringType) },
      }),
    }),
    authentication: new InputObject({
      name: 'UserInputAuthenticationObject',
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
