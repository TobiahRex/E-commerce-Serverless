import {
  GraphQLNonNull as NonNull,
  GraphQLString as StringType,
  GraphQLInputObjectType as InputObject,
} from 'graphql';


export const createUserType = {
  name: new InputObject({
    name: 'Users name object.',
    fields: () => ({
      first: { type: NonNull(StringType) },
      last: { type: NonNull(StringType) },
      display: { type: NonNull(StringType) },
    }),
  }),
};
