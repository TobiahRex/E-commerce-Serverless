export default function handleSquareErrors(response) {
  const {
    data: {
      errors,
    },
  } = response;

  let errorMsg = '';

  errors.forEach(({ category, code, detail }) => {
    switch (category) {
      /* eslint-disable no-lone-blocks */
      case 'API_ERROR': {
        errorMsg = 'Our deepest apologies!  Our payment provider is currently doing server maintenance. Please try again later.';
      } break;
      case 'AUTHENTICATION_ERROR': {
        errorMsg = 'Our deepest apologies!  Looks like we had a issue trying to charge your credit card.  Please try again later.  If the problem continues please contact support: support@nj2jp.com.';
      } break;
      case 'INVALID_REQUEST_ERROR': {

      }
      /* eslint-enable no-lone-blocks */
    }
  });
  return errorMsg;
}


/*
Name	Description
API_ERROR
An error occurred with the Connect API itself.

AUTHENTICATION_ERROR
An authentication error occurred. Most commonly, the request had a missing, malformed, or otherwise invalid Authorization header.

INVALID_REQUEST_ERROR
The request was invalid. Most commonly, a required parameter was missing, or a provided parameter had an invalid value.

RATE_LIMIT_ERROR
Your application reached the Connect API rate limit. Retry your request after a while.

PAYMENT_METHOD_ERROR
An error occurred while processing a payment method. Most commonly, the details of the payment method were invalid (such as a card's CVV or expiration date).

REFUND_ERROR
*/
