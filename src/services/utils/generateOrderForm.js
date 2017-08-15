export default function GenerateOrerForm({
  userId,
  taxRate,
  total,
}) {
  const result = {
    userId,
    cart: cart.reduce((a, n) => {
      if (!!n._id) {
        a._id = n._id;
        a.qty = n.qty;
        return a;
      }
      return a;
    },{}),
    taxes: {
      city: String(taxRate.city),
      state: String(taxRate.state),
      total: String(taxRate.total),
    },
    total: {
      subTotal: total.subTotal,
      tax: total.tax,
      grandTotal: total.grandTotal,
      discount: {
        qty: false,
        qtyAmount: "",
        register: false,
        registerAmount: "",
      },
    },
    sagawa: {
      sagawaId: "123123123123",
      shippingAddress: {
        givenName: "Toby",
        familyName: "Bickley",
        email: "bob@bob.com",
        postalCode: 1231234,
        addressLine1: "asdfasdfsadf",
        addressLine2: "asdfasdfsd",
        country: "JP",
        phoneNumber: "08039188013",
      },
    },
    square: {
      billingAddress: {
        billingCountry: "Japan",
        billingCity: "Yokohama",
        billingPrefecture: "Kanagawa",
      },
      cardInfo: {
        last4: 1234,
        nameOnCard: "Bob Bobby",
        cardNonce: "123asdf123",
        expiration: "12/18",
        cvn: 123,
        postalCode: "2342345",
      },
      charge: {
        amount: 120,
        currency: "USD",
      },
    },
  };
};
