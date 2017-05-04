import {
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
  GraphQLInputObjectType as InputObject,
} from 'graphql';


export const createUserInput = {
  name: new InputObject({
    name: 'Users name object.',
    fields: () => ({
      first: { type: NonNull(StringType) },
      last: { type: NonNull(StringType) },
      display: { type: NonNull(StringType) },
    }),
  }),
  authentication: new InputObject({
    name: 'Authentication information for user.',
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
      name: 'Geolocation information for user.',
      fields: () => ({
        ipAddress: { type: StringType },
        lat: { type: StringType },
        long: { type: StringType },
        country: { type: StringType },
      }),
    }),
  }),
  permissions: new InputObject({
    name: 'Permissions granted for user.',
    fields: () => ({
      role: { type: StringType },
    }),
  }),
  userStory: new InputObject({
    name: 'Bio information for user.',
    fields: () => ({
      age: { type: NumberType },
      birthday: { type: DateType },
      bio: { type: StringType },
    }),
  }),
};
