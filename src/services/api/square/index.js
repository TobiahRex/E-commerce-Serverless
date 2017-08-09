
import { create } from 'apisauce';

const createSquareAPI = () => {
  const api = create({
    basURL: 'https://connect.squareup.com/v2',
  });

  const authorizeDelayTransaction = ({
    locationId,
    transactionId,
    shippingEmail,
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
      },
    },

    {
      headers: {

      },
    },
  );

  return {
    authorizeDelayTransaction,
  };
};

export default createSquareAPI();
