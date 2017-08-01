import { gql } from 'react-apollo';

export const AddToMemberCart = gql`
  mutation AddToMemberCart(
    $userId: ID!
    $qty: Int!
    $product: ID!
  ) {
    AddToMemberCart(
      userId: $userId
      qty: $qty
      productId: $productId
    ) {
      _id
      error {
        hard
        soft
        message
      }
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
export const EditToMemberCart = gql`
  mutation EditToMemberCart(
    $userId: ID!
    $products: [ProductsInput]!
  ) {
    EditToMemberCart(
      userId: $userId
      products: $products
    ) {
      _id
      error {
        hard
        soft
        message
      }
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
export const DeleteFromMemberCart = gql`
  mutation DeleteFromMemberCart(
    $productId: ID!,
    $userId: ID!
  ){
    DeleteFromMemberCart(productId: $productId, userId: $userId){
      _id
      error {
        hard
        soft
        message
      }
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
export const EmptyMemberCart = gql`
mutation EmptyMemberCart($userId: ID!) {
  EmptyMemberCart(userId: $userId){
    _id
    error {
      hard
      soft
      message
    }
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
