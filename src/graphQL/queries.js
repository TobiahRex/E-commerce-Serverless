import {
  gql,
} from 'react-apollo';


export const FindProductsByFlavor = gql`
  query FindProductsByFlavor($flavor: String!) {
    FindProductsByFlavor(flavor: $flavor){
      _id
      error {
        hard
        soft
        message
      }
      product {
        mainTitle
        title
        flavor
        price
        sku
        size
        nicotineStrength
        slug
        vendor
        blurb
        images {
          purpose
          url
        }
        quantities {
          available
          inCart
        }
      }
    }
  }
`;

export const FindProductById = gql`
  query FindProductById($id: ID!) {
    FindProductById(_id: $id){
      _id
      error {
        hard
        soft
        message
      }
      product {
        mainTitle
        title
        flavor
        price
        sku
        size
        nicotineStrength
        slug
        vendor
        blurb
        images {
          purpose
          url
        }
        quantities {
          available
          inCart
        }
      }
    }
  }
`;

export const FetchMultipleProducts = gql`
  query FetchMultipleProducts($ids: [ID]!) {
    FetchMultipleProducts(ids: $ids){
      _id
      error {
        hard
        soft
        message
      }
      product {
        title
        flavor
        price
        sku
        slug
        vendor
        nicotineStrength
        images {
          purpose
          url
        }
      }
    }
  }
`;
