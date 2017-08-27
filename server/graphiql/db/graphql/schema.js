import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
import ProductTypes from './types/productTypes';
import UserTypes from './types/userTypes';
import Transaction from './types/transactionTypes';
import Sagawa from './types/sagawaTypes';
import Contact from './types/contactTypes';

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'The primary query object.',
  fields: () => ({
    FetchUserProfile: UserTypes.queries.FetchUserProfile,
    FindProductById: ProductTypes.queries.FindProductById,
    FindProductsByFlavor: ProductTypes.queries.FindProductsByFlavor,
    PopularProducts: ProductTypes.queries.PopularProducts,
    FetchMultipleProducts: ProductTypes.queries.FetchMultipleProducts,
    FetchSquareLocations: Transaction.queries.FetchSquareLocations,
    FetchSagawa: Sagawa.queries.FetchSagawa,
    FetchTrackingInfo: Sagawa.queries.FetchTrackingInfo,
  }),
});

const mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  description: 'The primary mutation object.',
  fields: () => ({
    CreateProduct: ProductTypes.mutations.CreateProduct,
    LoginOrRegister: UserTypes.mutations.LoginOrRegister,
    AddToMemberCart: UserTypes.mutations.AddToMemberCart,
    EmptyMemberCart: UserTypes.mutations.EmptyMemberCart,
    EditToMemberCart: UserTypes.mutations.EditToMemberCart,
    DeleteFromMemberCart: UserTypes.mutations.DeleteFromMemberCart,
    FindProductAndUpdate: ProductTypes.mutations.FindProductAndUpdate,
    FindProductByIdAndDelete: ProductTypes.mutations.FindProductByIdAndDelete,
    ValidatePostal: Sagawa.mutations.ValidatePostal,
    SubmitFinalOrder: Transaction.mutations.SubmitFinalOrder,
    SubmitSupport: Contact.mutations.SubmitSupport,
  }),
});

export default new GraphQLSchema({
  query,
  mutation,
});
