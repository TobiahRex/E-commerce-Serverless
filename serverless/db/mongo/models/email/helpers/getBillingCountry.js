export default function getBillingCountry(countryCode) {
  switch (countryCode) {
    case 'JP': return 'Japan';
    case 'US': return 'United States';
    default: return 'Japan';
  }
}
