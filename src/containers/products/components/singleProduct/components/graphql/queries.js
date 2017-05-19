import {
  gql,
} from 'react-apollo';

const queryProductById = gql`
  query findProductById($id: ID!) {
    findProductById(_id: $id){
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
export default queryProductById;
