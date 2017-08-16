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
  $newsletterDecision: Bool!
  $termsAgreement: Bool!
  $shippingFirstName: String!
  $shippingLastName: String!
  $shippingEmail: String!
  $shippingAddressLine1: String!
  $shippingAddressLine2: String!
  $shippingCountry: String!,
  $shippingPrefecture: String!
  $shippingCity: String!
  $shippingPostalCode: String!
  $shippingPhoneNumber: String!
  $ccNameOnCard: String!
  $ccNumber: String!
  $ccExpireMonth: String!
  $ccExpireYear: String!
  $ccCvn: String!
  $ccZip: String!
  $termsAgreement: Bool!,
  $subTotal: String!
  $grandTotal: String!
  $taxes: String!
  $discountQty: Bool!
  $discountQtyAmount: String!
  $discountRegister: Bool!
  $discountRegisterAmount: String!
) {
  SubmitFinalOrder (billingFirstName: $billingFirstName
    newsletterDecision: $newsletterDecision
    shippingFirstName: $shippingFirstName
    shippingLastName: $shippingLastName
    shippingEmail: $shippingEmail
    shippingAddressLine1: $shippingAddressLine1
    shippingAddressLine2: $shippingAddressLine2
    shippingCountry: $shippingCountry
    shippingPrefecture: $shippingPrefecture
    shippingCity: $shippingCity
    shippingPostalCode: $shippingPostalCode
    shippingPhoneNumber: $shippingPhoneNumber
    ccNameOnCard: $ccNameOnCard
    ccNumber: $ccNumber
    ccExpireMonth: $ccExpireMonth
    ccExpireYear: $ccExpireYear
    ccCvn: $ccCvn
    ccZip: $ccZip
    termsAgreement: $termsAgreement
    discountQty: $discountQty
    discountQtyAmount: $discountQtyAmount
    discountRegister: $discountRegister
    discountRegisterAmount: $discountRegisterAmount
  ) {
    _id
    error {
      hard
      soft
      message
    }
    discount
    subTotal
    tax
    grandTotal
    sagawa {
      awbNumber
      referenceNumber
      address
    }
    square {
      billingInfo {
        nameOnCard
        last4
        amount
        email
      }
    }
    sesEmail {
      sent
      mailId
      address
    }
  }
}
`;
