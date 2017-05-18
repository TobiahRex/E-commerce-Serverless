import {
  gql,
} from 'react-apollo';

const SINGLE_PRODUCT_BY_ID = gql`
  query findProductById($_id: ID!) {
    findProductById(_id: $_id){
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
      }
    }
  }
`;
export default SINGLE_PRODUCT_BY_ID;
