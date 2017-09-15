export default function handleSquareErrors(response) {
  const {
    data: {
      errors,
    },
  } = response;

  let errorMsg = '';

  errors.forEach(({ category, code, detail }) => {
    /* eslint-disable no-lone-blocks */
    switch (code) {
      case 'CARD_EXPIRED': {
        errorMsg = {
          en: 'Your credit card has expired.',
          ja: 'クレジットカードの有効期限が切れています。',
        };
      } break;
      case 'INVALID_EXPIRATION': {
        errorMsg = {
          en: 'The expiration dates you provided is invalid.  Please correct it and try again.',
          ja: '指定した有効期限は無効です。 それを修正して、もう一度やり直してください。',
        };
      } break;
      case 'INVALID_EXPIRATION_YEAR': {
        errorMsg = {
          en: 'The expiration YEAR you provided is incorrect.  Please correct it and try again.',
          ja: 'あなたが指定した年月が間違っています。 それを修正して、もう一度やり直してください。',
        };
      } break;
      case 'INVALID_EXPIRATION_DATE': {
        errorMsg = 'The expiration DATE you provided is incorrect.  Please correct it and try again.';
      } break;
      case 'INVALID_CARD': {
        errorMsg = 'You appear to be using an invalid card.  Please try a different Credit Card and try again.';
      } break;
      case 'AMOUNT_TOO_HIGH': {
        errorMsg = 'The Total Amount for this purchase is beyond your Credit Card allowed purchase limit.  Please try a different card and try again.';
      } break;
      case 'CARD_DECLINED': {
        errorMsg = 'Your card was declined. Please try a different Credit Card and try again.';
      } break;
      default: errorMsg = detail;
    }

    switch (category) {
      case 'API_ERROR': {
        errorMsg = 'Our deepest apologies!  Our payment provider is currently doing server maintenance. Please try again later.';
      } break;
      case 'AUTHENTICATION_ERROR': {
        errorMsg = 'Our deepest apologies!  Looks like we had an internal issue charging your credit card.  Please try again later.  If the problem continues please contact support: support@nj2jp.com.';
      } break;
      case 'INVALID_REQUEST_ERROR': {
        errorMsg = 'Our deepest apologies!  Looks like your payment is missing some required information.  Please try again.';
      } break;
      case 'RATE_LIMIT_ERROR': {
        errorMsg = 'Our deepest apologies!  Our servers are currently under heavy load.  We\'ll post a status on Twitter @NicJuice2Japan when we\'re ready to process payment again.';
      } break;
      case 'PAYMENT_METHOD_ERROR': {
        errorMsg = 'The credit card details you provided appear to be invalid.  Please verify your payment information and try again.';
      } break;
      case 'REFUND_ERROR': {
        errorMsg = 'Our payment provider rejected the refund.  Please come back in the future and try again.';
      } break;
      default: {
        errorMsg = 'We were unable to process this payment request.  Please come back in the future and try again.';
      }
      /* eslint-enable no-lone-blocks, default-case */
    }
  });
  return errorMsg;
}
