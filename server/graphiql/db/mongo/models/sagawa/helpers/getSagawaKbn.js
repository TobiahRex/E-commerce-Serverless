export default function getSagawaKbn(shippingCountry) {
  const {
    SAGAWA_ENGLISH: sagawaKbnUs,
    SAGAWA_JAPANESE: sagawaKbnJp,
  } = process.env;

  if (shippingCountry === 'JP') return sagawaKbnJp;
  return sagawaKbnUs;
}
