export default function getRefundAmount(transactionDoc) {
  const {
    square: {
      tender: {
        amount_money,
      },
    },
  } = transactionDoc;

  let currency,
    amount;

  if (amount_money.currency === 'USD') {
    currency = '$';
    amount = `${String(amount_money.amount).slice(0, 2)}.${String(amount_money.amount).slice(2, 4)}`;
  } else if (amount_money.currency === 'JPY') {
    currency = '¥';
    amount = amount_money.amount;
  }
  return ({
    amount,
    currency,
  });
}
