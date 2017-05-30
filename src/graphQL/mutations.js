import { gql } from 'react-apollo';

export const AddToMemberCart = gql`
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
        cart {
          qty
          strength
          product
        }
      }
    }
  }
`;
export const UpdateToMemberCart = gql`
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
        cart {
          qty
          strength
          product
        }
      }
    }
  }
`;

export const DeleteFromMemberCart = gql`
  mutation DeleteFromMemberCart(
    $productId: ID!,
    $userId: ID!
  ){
    DeleteFromMemberCart(productId: $productId, userId: $userId){
      _id
      shopping{
        cart{
          qty
          strength
          product
        }
      }
    }
  }
`;
