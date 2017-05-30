import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
import ProductTypes from './types/productTypes';
import UserTypes from './types/userTypes';

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'The primary query object.',
  fields: () => ({
    FetchUserProfile: UserTypes.queries.FetchUserProfile,
    FindProductById: ProductTypes.queries.FindProductById,
    PopularProducts: ProductTypes.queries.PopularProducts,
    FetchMultipleProducts: ProductTypes.queries.FetchMultipleProducts,
  }),
});

const mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  description: 'The primary mutation object.',
  fields: () => ({
    CreateProduct: ProductTypes.mutations.CreateProduct,
    LoginOrRegister: UserTypes.mutations.LoginOrRegister,
    AddToMemberCart: UserTypes.mutations.AddToMemberCart,
    UpdateToMemberCart: UserTypes.mutations.UpdateToMemberCart,
    DeleteFromMemberCart: UserTypes.mutations.DeleteFromMemberCart,
    FindProductAndUpdate: ProductTypes.mutations.FindProductAndUpdate,
    FindProductByIdAndDelete: ProductTypes.mutations.FindProductByIdAndDelete,
  }),
});

export default new GraphQLSchema({
  query,
  mutation,
});
