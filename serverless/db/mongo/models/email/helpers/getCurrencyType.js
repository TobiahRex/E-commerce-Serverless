export default function getCurrencyType(currency) {
  if (currency === 'US') return '$';
  if (currency === 'JP') return '¥';
  return '$';
}
