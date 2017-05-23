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
        nicotine_strengths
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
export const nothing = '';
