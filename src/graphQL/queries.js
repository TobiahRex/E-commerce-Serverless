import {
  gql,
} from 'react-apollo';

export const FindProductById = gql`
  query FindProductById($id: ID!) {
    FindProductById(_id: $id){
      _id
      product {
        mainTitle
        title
        flavor
        price
        sku
        sizes
        nicotineStrength
        routeTag
        vendor
        blurb
        images {
          purpose
          url
        }
        quantities {
          available
          in_cart
        }
      }
    }
  }
`;

export const FetchMultipleProducts = gql`
  query FetchMultipleProducts($ids: [ID]!) {
    FetchMultipleProducts(ids: $ids){
      _id
      product {
        title
        flavor
        price
        sku
        routeTag
        vendor
        images {
          purpose
          url
        }
      }
    }
  }
`;
