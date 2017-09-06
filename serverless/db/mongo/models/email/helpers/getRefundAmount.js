/* eslint-disable consistent-return*/
export default function getRefundAmount(dbTransaction) {
  const {
    square: {
      tender: {
        amount_money,
      },
    },
  } = dbTransaction;

  if (amount_money.currency === 'JPY') {
    return ({
      amount: amount_money.amount,
      currency: '¥',
    });
  } else if (amount_money.currency === 'USD') {
    return ({
      amount: `${String(amount_money.amount).slice(0, 2)}.${String(amount_money.amount).slice(2, 4)}`,
      currency: '$',
    });
  }
}
