export default function GenerateOrerForm({
  userId,

}) {
  const result = {
    userId,
    cart: cart.reduce((a, n) => {
      
    },{}),
    taxes: {
      city: "0.03"
      state: "0.06"
      total: "0.9"
    }
    total: {
      subTotal: "120"
      tax: "12.23"
      grandTotal: "132.23"
      discount: {
        qty: false
        qtyAmount: ""
        register: false
        registerAmount: ""
      }
    }
    sagawa: {
      sagawaId: "123123123123"
      shippingAddress: {
        givenName: "Toby"
        familyName: "Bickley"
        email: "bob@bob.com"
        postalCode: 1231234
        addressLine1: "asdfasdfsadf"
        addressLine2: "asdfasdfsd"
        country: "JP"
        phoneNumber: "08039188013"
      }
    }
    square: {
      billingAddress: {
        billingCountry: "Japan"
        billingCity: "Yokohama"
        billingPrefecture: "Kanagawa"
      }
      cardInfo: {
        last4: 1234
        nameOnCard: "Bob Bobby"
        cardNonce: "123asdf123"
        expiration: "12/18"
        cvn: 123
        postalCode: "2342345"
      }
      charge: {
        amount: 120
        currency: "USD"
      }
    }
  }
};
