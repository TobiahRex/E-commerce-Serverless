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
    product: $product
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

export const ValidatePostal = gql`
  mutation ValidatePostal(
    $postalCode: String!
    $userId: ID!
  ) {
    ValidatePostal(
      postalCode: $postalCode
      userId: $userId
    ) {
      _id
      error {
        hard
        soft
        message
      }
      postalInfo {
        postalCode
        jpAddress
        verified
      }
    }
  }
`;

export const SubmitFinalOrder = gql`
mutation SubmitFinalOrder(
  $userId: ID!
  $comments: String
  $termsAgreement: Boolean!
  $newsletterDecision: Boolean!
  $cart: [TransactionCartProduct]!
  $taxes: TransactionTaxesInfoInput!
  $total: TransactionTotalsInfoInput!
  $sagawa: TransactionSagawaInfoInput!
  $square: TransactionSqaureInformationInput!
) {
  SubmitFinalOrder (
    userId: $userId
    comments: $comments
    termsAgreement: $termsAgreement
    newsletterDecision: $newsletterDecision
    cart: $cart
    taxes: $taxes
    total: $total
    sagawa: $sagawa
    square: $square
) {
    _id
    error {
      hard
      soft
      message
    }
    date
    comments
    termsAgreement
    user
    products {
      _id
      qty
    }
    sagawa
    marketHero
    invoiceEmail
    taxes {
      cityRate
      stateRate
      totalRate
    }
    total {
      subTotal
      taxes
      grandTotal
      discount {
        qty
        qtyAmount
        register
        registerAmount
      }
    }
    square {
      locationId
      transactionId
      shippingAddress {
        shippingCountry
        shippingPrefecture
        shippingCity
      }
      cardInfo {
        last4
        nameOnCard
        cardNonce
      }
      charge {
        amount
        currency
      }
    }
  }
}
`;
