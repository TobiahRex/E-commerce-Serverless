export default function getSagawaKbn(shippingCountry) {
  const {
    SAGAWA_ENV: sagawaEnv,
    SAGAWA_JAPANESE: sagawaKbnUs,
    SAGAWA_JAPANESE: sagawaKbnJp,
    SAGAWA_TEST_ENGLISH: sagawaKbnUsTest,
    SAGAWA_TEST_JAPANESE: sagawaKbnJpTest,
  } = process.env;

  if (sagawaEnv === 'development') {
    if (shippingCountry === 'JP') return sagawaKbnJpTest;
    return sagawaKbnUsTest;
  }
  if (shippingCountry === 'JP') return sagawaKbnJp;
  return sagawaKbnUs;
}
