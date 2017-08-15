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
    shippingPhoneNumber,
    ccNameOnCard,
    ccNumber,
    ccExpireMonth,
    ccExpireYear,
    ccCvn,
    ccZip,
    ccCountry,
    termsAgreement,
    cart,
    total,
  },
}) {
  return ({
    userId: '', // from redux
    cart: cart.reduce((a, n) => {  // from state
      if (!!n._id) {
        a._id = n._id;
        a.qty = n.qty;
        return a;
      }
      return a;
    }, {}),
    taxes: {}, // from redux
    total, // from state
    sagawa: {
      sagawaId: '',  // from redux TODO add this to "postalInfo"
      shippingAddress: { // form state
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
      billingAddress: {  // from state & cardData
        billingCountry: ccCountry,
        billingCity: shippingCity,
        billingPrefecture: shippingPrefecture,
      },
      cardInfo: {  // from state & card Data
        last4: cardData.last4,
        nameOnCard: cardData.nameOnCard,
        cardNonce: cardData.cardNonce,
        postalCode: cardData.postalCode,
      },
      charge: {  // manual input
        amount: charge.amount,
        currency: charge.currency,
      },
    },
  });
}
