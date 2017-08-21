export default function composeAmount(country, grandTotal, fxRateJpy) {
  let grandTotalInt = Number(grandTotal);
  const jpyInt = Number(fxRateJpy) / 100;

  if (country === 'JP') grandTotalInt *= jpyInt;

  return Number(
    grandTotalInt
    .toFixed(2)
    .split('.')
    .reduce((a, n) => a + n, ''),
  );
}
