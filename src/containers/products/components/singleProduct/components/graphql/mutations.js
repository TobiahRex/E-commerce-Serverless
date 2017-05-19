import { gql } from 'react-apollo';

export const addToMemberCart = gql`
  mutation addToMemberCart($id: ID!) {
    addToMemberCart(_id: $id) {
      shopping {
        cart
      }
    }
  }
`;
export const updateToMemberCart = gql`
  mutation updateToMemberCart($memberId: ID!, $productId: ID!) {
    updateToMemberCart(memberId: $memberId, productId: $productId) {
      shopping {
        cart
      }
    }
  }
`;
