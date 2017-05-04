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
      avatar: 
    }),
  }),
};
