export default function GenerateOrerForm({
  userId,
  cart,
  taxRate,
  total,
  address,
  postalInfo,
  cardData,
  charge,
}) {
  return ({
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
        country: address.shippingCountry.split(' - ')[1],
        phoneNumber: address.phoneNumber,
      },
    },
    square: {
      billingAddress: {
        billingCountry: cardData.ccCountry,
        billingCity: address.shippingCity,
        billingPrefecture: address.shippingPrefecture,
      },
      cardInfo: {
        last4: cardData.last4,
        nameOnCard: cardData.nameOnCard,
        cardNonce: cardData.cardNonce,
        postalCode: cardData.postalCode,
      },
      charge: {
        amount: charge.amount,
        currency: charge.currency,
      },
    },
  });
}
