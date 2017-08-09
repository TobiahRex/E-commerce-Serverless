
import { create } from 'apisauce';

const createSquareAPI = () => {
  const api = create({
    basURL: 'https://connect.squareup.com/v2',
  });

  const authorizeDelayTransaction = ({
    locationId,
    transactionId,
  }) => api.post(
    `/locations/${locationId}/transactions`,
    {
      data: {
        idempotency_key: transactionId,
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
