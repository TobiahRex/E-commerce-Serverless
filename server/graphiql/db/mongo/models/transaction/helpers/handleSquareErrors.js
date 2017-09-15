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
        errorMsg = {
          en: 'The expiration DATE you provided is incorrect.  Please correct it and try again.',
          ja: '指定した有効期限DATEが間違っています。 それを修正して、もう一度やり直してください。',
        };
      } break;
      case 'INVALID_CARD': {
        errorMsg = {
          en: 'You appear to be using an invalid card.  Please try a different Credit Card and try again.',
          ja: '無効なカードを使用しているようです。 別のクレジットカードをお試しください。もう一度お試しください。',
        };
      } break;
      case 'AMOUNT_TOO_HIGH': {
        errorMsg = {
          en: 'The Total Amount for this purchase is beyond your Credit Card allowed purchase limit.  Please try a different card and try again.',
          ja: 'この購入の総額は、クレジットカードで購入可能な購入限度額を超えています。 別のカードを試してみてください。もう一度お試しください。',
        };
      } break;
      case 'CARD_DECLINED': {
        errorMsg = {
          en: 'Your card was declined. Please try a different Credit Card and try again.',
          ja: 'あなたのカードは拒否されました。 別のクレジットカードをお試しください。もう一度お試しください。',
        };
      } break;
      default: errorMsg = detail;
    }

    switch (category) {
      case 'API_ERROR': {
        errorMsg = {
          en: 'Our deepest apologies!  Our payment provider is currently doing server maintenance. Please try again later.',
          ja: '私たちの深い謝罪！ 当社の支払いプロバイダは現在、サーバーのメンテナンスを行っています。 後でもう一度お試しください。',
        };
      } break;
      case 'AUTHENTICATION_ERROR': {
        errorMsg = {
          en: 'Our deepest apologies!  Looks like we had an internal issue charging your credit card.  Please try again later.  If the problem continues please contact support: support@nj2jp.com.',
          ja: '私たちの深い謝罪！ あなたのクレジットカードに請求する内部問題があるようです。 後でもう一度お試しください。 問題が解決しない場合は、support @ nj2jp.comまでご連絡ください。',
        };
      } break;
      case 'INVALID_REQUEST_ERROR': {
        errorMsg = {
          en: 'Our deepest apologies!  Looks like your payment is missing some required information.  Please try again.',
          ja: '私たちの深い謝罪！ お支払いに必要な情報が不足しているようです。 もう一度お試しください。',
        };
      } break;
      case 'RATE_LIMIT_ERROR': {
        errorMsg = {
          en: 'Our deepest apologies!  Our servers are currently under heavy load.  We\'ll post a status on Twitter @NicJuice2Japan when we\'re ready to process payment again.',
          ja: '私たちの深い謝罪！ 私たちのサーバーは現在、負荷が重いです。 私たちは、\ n再び支払いを処理する準備ができたら、Twitter @ NicJuice2Japanにステータスを掲載します。',
        };
      } break;
      case 'PAYMENT_METHOD_ERROR': {
        errorMsg = {
          en: 'The credit card details you provided appear to be invalid.  Please verify your payment information and try again.',
          ja: 'あなたが提供したクレジットカードの詳細は無効であるようです。 お支払い情報を確認して、もう一度お試しください。',
        };
      } break;
      case 'REFUND_ERROR': {
        errorMsg = {
          en: 'Our payment provider rejected the refund.  Please come back in the future and try again.',
          ja: '当社の支払いプロバイダは払い戻しを拒否しました。 今後もやって来て、もう一度やり直してください。',
        };
      } break;
      default: {
        errorMsg = {
          en: 'We were unable to process this payment request.  Please try a different credit card or try again later.',
          ja: 'この支払いリクエストを処理できませんでした。 別のクレジットカードをお試しになるか、後でやり直してください',
        };
      }
      /* eslint-enable no-lone-blocks, default-case */
    }
  });
  return errorMsg;
}
