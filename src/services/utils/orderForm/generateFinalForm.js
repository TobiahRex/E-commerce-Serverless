export default function ComposeLocalData({
  state: {
    newsletterDecision,
    shippingFirstName,
    shippingLastName,
    shippingEmail,
    shippingPostalCode,
    shippingAddressLine1,
    shippingAddressLine2,
    shippingCountry,
    shippingPrefecture,
    shippingCity,
    shippingPhoneNumber,
    ccNameOnCard,
    ccCountry,
    termsAgreement,
    cart,
    total,
  },
  props: {
    userId,
    sagawaId,
    taxRate: taxes,
  },
  cardData,
}) {
  return ({
    userId,
    newsletterDecision,
    termsAgreement,
    cart: cart.reduce((a, n) => {
      if (!!n._id) {
        a._id = n._id;
        a.qty = n.qty;
        return a;
      }
      return a;
    }, {}),
    taxes,
    total,
    sagawa: {
      sagawaId,
      shippingAddress: {
        givenName: shippingFirstName,
        familyName: shippingLastName,
        email: shippingEmail,
        postalCode: shippingPostalCode,
        addressLine1: shippingAddressLine1,
        addressLine2: shippingAddressLine2,
        country: shippingCountry.split(' - ')[1],
        phoneNumber: shippingPhoneNumber,
      },
    },
    square: {
      billingAddress: {
        billingCountry: ccCountry,
        billingCity: shippingCity,
        billingPrefecture: shippingPrefecture,
      },
      cardInfo: {
        last4: cardData.last4,
        nameOnCard: ccNameOnCard,
        cardNonce: cardData.cardNonce,
        postalCode: !!cardData.postalCode ? cardData.postalCode : '',
      },
      charge: {
        amount: total.grandTotal,
        currency: 'USD',
      },
    },
  });
}
