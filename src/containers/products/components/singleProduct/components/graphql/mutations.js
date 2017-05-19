import { gql } from 'react-apollo';

export const addToMemberCart = gql`
  mutation AddToMemberCart(
    $userId: ID!
    $qty: Int!
    $strength: String!
    $product: ID!
  ) {
    AddToMemberCart(
      userId: $userId
      qty: $qty
      strength: $strength
      product: $product
    ) {
      shopping {
        cart
      }
    }
  }
`;
export const updateToMemberCart = gql`
mutation UpdateToMemberCart(
  $userId: ID!
  $qty: Int!
  $strength: String!
  $product: ID!
) {
  UpdateToMemberCart(
    userId: $userId
    qty: $qty
    strength: $strength
    product: $product
  ) {
    shopping {
      cart
    }
  }
}
`;
