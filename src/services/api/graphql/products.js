import { create } from 'apisauce';

const { CLIENT_GRAPHQL_URL: graphqlUrl } = process.env;
if (!graphqlUrl) throw new Error(`Cannot create API: "graphqlURL" = ${graphqlUrl}.`);
console.info('PRODUCTS Graphql API: ', graphqlUrl); // eslint-disable-line

const createAPI = () => {
  const api = create({
    baseURL: graphqlUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'omit',
  });

  const FetchProductById = _id => api.post('', {
    query: `query FetchProductById($_id: String!) {
      FetchProductById(_id: $_id) {
        _id
        error {
          hard
          soft
          message {
            en
            ja
          }
        }
        product {
          mainTitle {
            en
            ja
          }
          title {
            en
            ja
          }
          flavor
          price
          sku
          size
          nicotineStrength
          slug
          vendor {
            en
            ja
          }
          blurb {
            en
            ja
          }
          images {
            purpose
            url
          }
          quantities {
            available
            inCarts
          }
        }
      }
    }`,
    variables: {
      _id,
    },
  });
  const FetchPopularProducts = qty => api.post('', {
    query: `query PopularProducts($qty: Int!) {
      PopularProducts(qty: $qty) {
        _id
        docId
        slug
        images {
          purpose
          url
        }
        title {
          en
          ja
        }
        completedCheckouts
      }
    }`,
    variables: {
      qty,
    },
  });

  const FetchMultipleProducts = ids => api.post('', {
    query: `
    query FetchMultipleProducts($ids: [ID]!){
      FetchMultipleProducts(ids: $ids){
        _id
        error {
          hard
          soft
          message {
            en
            ja
          }
        }
        product {
          mainTitle {
            en
            ja
          }
          title {
            en
            ja
          }
          flavor
          price
          sku
          size
          nicotineStrength
          slug
          vendor {
            en
            ja
          }
          blurb {
            en
            ja
          }
          images {
            purpose
            url
          }
          quantities {
            available
            inCarts
          }
        }
      }
    }
    `,
    variables: {
      ids: [...ids],
    },
  });

  return {
    FetchProductById,
    FetchPopularProducts,
    FetchMultipleProducts,
  };
};
export default { createAPI };
