
import { create } from 'apisauce';

const createSquareAPI = () => {
  const api = create({
    baseURL: 'https://connect.squareup.com/v2',
  });

  const fetchPaymentForm = () => api.get('/paymentForm');

  const authorizeDelayTransaction = ({
    locationId,
    transactionId,
    shippingEmail,
    shippingAddressLine1,
    shippingAddressLine2,
    shippingCity,
    shippingPrefecture,
    shippingPostalCode,
    shippingCountry,
    grandTotal,
    cardNonce,
  }) => api.post(
    `/locations/${locationId}/transactions`,
    {
      data: {
        idempotency_key: transactionId,
        buyer_email_address: shippingEmail,
        shipping_address: {
          address_line_1: shippingAddressLine1,
          address_line_2: shippingAddressLine2,
          locality: shippingCity,
          administrative_district_level_1: shippingPrefecture,
          postal_code: shippingPostalCode,
          country: shippingCountry,
        },
        amount_money: {
          amount: grandTotal,
          currency: 'USD',
        },
        card_nonce: cardNonce,
        reference_id: transactionId,
        note: 'Web API order.',
        delay_capture: true,
      },
    },

    {
      headers: {
        Authorization: `Bearear ${process.env.SQUARE_ACCESS_TOKEN}`,
      },
    },
  );

  return {
    authorizeDelayTransaction,
    fetchPaymentForm,
  };
};

export default createSquareAPI();
