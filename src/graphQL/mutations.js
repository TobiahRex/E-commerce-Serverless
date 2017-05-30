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
      _id
      name {
        first
        last
        display
      }
      pictures {
        small
        large
        default
      }
      authentication {
        signedUp
        password
        createdAt
        totalLogins
        logins {
          date
          device
        }
        ageVerified
        auth0Identities {
          provider
          user_id
          connection
          isSocial
        }
      }
      contactInfo {
        email
        phone
        locale
        timezone
        location {
          ipAddress
          lat
          long
          country
        },
        devices {
          hardware
          os
        }
        socialNetworks {
          name
          link
        }
      }
      permissions {
        role
      }
      shopping {
        cart {
          qty
          strength
          product
        }
        transactions
      }
      permissions {
        role
      }
      userStory {
        age
        birthday
        bio
        gender
      }
      socialProfileBlob {
        line
        facebook
        google
        twitter
        linkedin
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
      name {
        first
        last
        display
      }
      pictures {
        small
        large
        default
      }
      authentication {
        signedUp
        password
        createdAt
        totalLogins
        logins {
          date
          device
        }
        ageVerified
        auth0Identities {
          provider
          user_id
          connection
          isSocial
        }
      }
      contactInfo {
        email
        phone
        locale
        timezone
        location {
          ipAddress
          lat
          long
          country
        },
        devices {
          hardware
          os
        }
        socialNetworks {
          name
          link
        }
      }
      permissions {
        role
      }
      shopping {
        cart {
          qty
          strength
          product
        }
        transactions
      }
      permissions {
        role
      }
      userStory {
        age
        birthday
        bio
        gender
      }
      socialProfileBlob {
        line
        facebook
        google
        twitter
        linkedin
      }
    }
  }
`;
