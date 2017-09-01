import ComposeAmount from './composeAmount';

export default function ComposeLocalData({
  state: {
    prComments: comments,
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
    taxRate: taxes,
    jpyFxRate,
    language,
  },
  cardData,
}) {
  const billingCountry = ccCountry.split('-')[1];

  return ({
    userId,
    comments,
    language,
    termsAgreement,
    newsletterDecision,
    cart: cart.map(({ _id, qty }) => ({ _id, qty })),
    taxes,
    total,
    jpyFxRate,
    sagawa: {
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
      tender: {
        amount_money: {
          amount: ComposeAmount(billingCountry, total.grandTotal, jpyFxRate),
          currency: billingCountry === 'US' ? 'USD' : 'JPY',
        },
        card_details: {
          card: {
            last_4: cardData.last_4,
            nameOnCard: ccNameOnCard,
            cardNonce: cardData.cardNonce,
            postalCode: !!cardData.billing_postal_code ? cardData.billing_postal_code : '',
          },
        },
      },
      billingCountry,
      shippingAddress: {
        shippingCity,
        shippingPrefecture: shippingPrefecture.split('-')[1],
      },
    },
  });
}
