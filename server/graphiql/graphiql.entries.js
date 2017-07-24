/* eslint-disable no-tabs, no-unused-vars */
const juices = {
  PopularProducts: `
    {
    PopularProducts(qty: 6){
      _id
      docId
      slug
      images {
        purpose
        url
      }
      title
      completedCheckouts
    }
  }
  `,
  frenchVanillaMocha: `
  mutation CreateProduct {
    CreateProduct(product: {
      mainTitle: "Switch Juice"
      title: "French Vanilla Mocha"
      flavor: "french_vanilla_mocha"
      price: "30"
      sku: "NJ2JP0001"
      size: small
      nicotineStrength: two
      images: [{
        purpose: "card"
        url: "/images/nj2jp_juice_card_fvm.png"
      }, {
        purpose: "large"
        url: "/images/nj2jp-fvm.jpg"
      }],
      slug: "french_vanilla_mocha"
      vendor: "Vape Switch"
      blurb: "The French Vanilla Mocha is a delicious blend of French Vanilla, Mocha Milk Chocolate and dash of Dark Chocolate and brings a smooth, enjoyable flavor.  A nice morning Vape to replace that cigarette with your coffee, but it can easily be considered and all-day Vape."
    }) {
      _id,
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
        dates {
          addedToStore
          removedFromStore
        }
      }
      statistics {
        addsToCart
        completedCheckouts
      }
    }
  }
  `,
  keylimePie: `
  mutation CreateProduct {
    CreateProduct(product: {
      mainTitle: "Switch Juice",
      title: "Keylime Pie",
      flavor: "keylime_pie",
      price: "30",
      sku: "NJ2JP0005",
      size: small,
      nicotineStrength: two,
      images: [{
        purpose: "card",
        url: "/images/nj2jp_juice_card_klp.png"
      }, {
        purpose: "large",
        url: "/images/nj2jp-klp.png"
      }],
      slug: "keylime_pie",
      vendor: "Vape Switch",
      blurb: "Key lime Pie tastes exactly like Key Lime Pie.  It’s Delicious!"
    }) {
      _id,
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
        dates {
          added_to_store
          removed_from_store
        }
      }
    }
  }
  `,
  pinaColada: `
  mutation CreateProduct {
    CreateProduct(product: {
      mainTitle: "Switch Juice",
      title: "Piña Colada",
      flavor: "pina_colada",
      price: "30",
      sku: "NJ2JP0005",
      size: small,
      nicotineStrength: two,
      images: [{
        purpose: "card",
        url: "/images/nj2jp_juice_card_pc.png"
      }, {
        purpose: "large",
        url: "/images/nj2jp-pc.png"
      }],
      slug: "pina_colada",
      vendor: "Vape Switch",
      blurb: "Piña Colada is a tasty blend of Pineapple and Coconut with a hint of rum flavor.  It has been steeped to give it a refined sweetness and a subtle coconut flavor.  You are sure to enjoy this blend."
    }) {
      _id,
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
        dates {
          added_to_store
          removed_from_store
        }
      }
    }
  }
  `,
  fruityBammBamm: `
  mutation CreateProduct {
      CreateProduct(product: {
        mainTitle: "Switch Juice",
        title: "Fruity Bamm Bamm",
        flavor: "fruity_bamm_bamm",
        price: "30",
        sku: "NJ2JP00016",
        size: small,
        nicotineStrength: eight,
        images: [{
    			purpose: "card",
          url: "/images/nj2jp_juice_card_fbb.png"
        }, {
          purpose: "large",
          url: "/images/nj2jp-fruity-bamm-bamm.png"
        }],
        slug: "fruity_bamm_bamm",
        vendor: "Vape Switch",
        blurb: "Taste just like Fruity Pebbles cereal and Its D-licious!!!!!"

      }) {
        _id,
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
          dates {
            added_to_store
            removed_from_store
          }
        }
      }
    }
  `,
  strawberriesNCream: `
  mutation CreateProduct {
      CreateProduct(product: {
        mainTitle: "Switch Juice",
        title: "Strawberries N' Cream",
        flavor: "strawberries_n_cream",
        price: "30",
        sku: "NJ2JP00017",
        size: small,
        nicotineStrength: two,
        images: [{
    			purpose: "card",
          url: "/images/nj2jp_juice_card_snc.png"
        }, {
          purpose: "large",
          url: "/images/nj2jp-strawberries-cream.png"
        }],
        slug: "strawberries_n_cream",
        vendor: "Vape Switch",
        blurb: "Fresh Strawberries with wonderful Cream.  So creamy and so very good!"
      }) {
        _id,
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
          dates {
            added_to_store
            removed_from_store
          }
        }
      }
    }
  `,
  pappleBerry: `
  mutation CreateProduct {
    CreateProduct(product: {
      mainTitle: "Switch Juice",
      title: "Papple Berry",
      flavor: "papple_berry",
      price: "30",
      sku: "NJ2JP0021",
      size: small,
      nicotineStrength: two,
      images: [{
  			purpose: "card",
        url: "/images/nj2jp_juice_card_pb.png"
      }, {
        purpose: "large",
        url: "/images/nj2jp-pappleberry.png"
      }],
      slug: "papple_berry",
      vendor: "Vape Switch",
      blurb: "Pappleberry is a wonderful blend of Peach, Apple and Strawberry.  These 3 fruity flavors masterfully combined together make a fantastic all-day vape."
    }) {
      _id,
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
        dates {
          added_to_store
          removed_from_store
        }
      }
    }
  }
  `,
};
const users = {
  LoginOrRegister: {
    query: `
    mutation LoginOrRegister(
      $auth0Id: String!
      $loginType: String!
      $name: UserNameInput!
      $pictures: UserPictureInput!
      $authentication: UserAuthenticationInput!
      $authenticationLogins: [UserLastLoginInput]!
      $authenticationAuth0Identities: [UserAuth0IdentitiesInput]!
      $contactInfo: UserContactInfoInput!
      $contactInfoLocation: UserLocationInput!
      $contactInfoDevices: [UserDevicesInput]!
      $contactInfoSocialNetworks: [UserSocialNetworkInput]!
      $shopping: UserShoppingInput!
      $shoppingCart: [UserCartInput]!
      $permissions: UserPermissionsInput!
      $userStory: UserStoryInput!
      $socialProfileBlob: UserSocialProfileBlobInput!
    ) {
      LoginOrRegister(
        auth0Id: $auth0Id
        loginType: $loginType
        name: $name
        pictures: $pictures
        authentication: $authentication
        authenticationLogins: $authenticationLogins
        authenticationAuth0Identities: $authenticationAuth0Identities
        contactInfo: $contactInfo
        contactInfoLocation: $contactInfoLocation
        contactInfoDevices: $contactInfoDevices
        contactInfoSocialNetworks: $contactInfoSocialNetworks
        shopping: $shopping
        shoppingCart: $shoppingCart
        permissions: $permissions
        userStory: $userStory
        socialProfileBlob: $socialProfileBlob
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
    `,
    variables: {
      auth0Id: '1903246816589953',
      loginType: 'facebook',
      name: {
        first: 'Tobiah',
        last: 'Rex',
        display: 'Tobiah Rex',
      },
      pictures: {
        small: 'http://asdfasdf',
        large: 'http://asdfasdf',
      },
      authentication: {
        signedUp: 'Fri May 26 2017 20:28:46 GMT+0900 (JST)',
        password: '',
        createdAt: 'Fri May 26 2017 20:28:46 GMT+0900 (JST)',
        totalLogins: 1,
        ageVerified: true,
      },
      authenticationLogins: [
        {
          date: 'Fri May 26 2017 20:28:46 GMT+0900 (JST)',
          device: 'computer',
        },
      ],
      authenticationAuth0Identities: [
        {
          provider: 'facebook',
          user_id: '123123123',
          connection: 'facebook',
          isSocial: true,
        },
      ],
      contactInfo: {
        locale: 'en-US',
        email: '',
        phone: '4153210002',
        timezone: 9,
      },
      contactInfoLocation: {
        ipAddress: '123123123',
        lat: '12312313',
        long: '1231123',
        country: 'JP',
      },
      contactInfoDevices: [
        {
          hardware: 'Galaxy S7',
          os: 'Android',
        },
      ],
      contactInfoSocialNetworks: [
        {
          name: 'facebook',
          link: 'http://123123123123',
        },
      ],
      shopping: {
        transactions: [],
      },
      shoppingCart: [],
      permissions: {
        role: 'user',
      },
      userStory: {
        age: 29,
        birthday: '123123123',
        bio: '',
        gender: 'male',
      },
      socialProfileBlob: {
        facebook: 'aasdfasdfasdf',
      },
    },
  },
};
