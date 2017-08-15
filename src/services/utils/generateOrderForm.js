export default function GenerateOrerForm({
  userId,
  taxRate,
  total,
  address,
  postalInfo,
}) {
  return (){
    userId,
    cart: cart.reduce((a, n) => {
      if (!!n._id) {
        a._id = n._id;
        a.qty = n.qty;
        return a;
      }
      return a;
    }, {}),
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
        qty: total.discount.qty,
        qtyAmount: total.discount.qtyAmount,
        register: total.dicsount.register,
        registerAmount: total.discount.registerAmount,
      },
    },
    sagawa: {
      sagawaId: '',
      shippingAddress: {
        givenName: address.firstName,
        familyName: address.lastName,
        email: address.email,
        postalCode: postalInfo.postalCode,
        addressLine1: address.shippingAddressLine1,
        addressLine2: address.shippingAddressLine2,
        country: address.shippingCountry,
        phoneNumber: address.phoneNumber,
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
  });
};
