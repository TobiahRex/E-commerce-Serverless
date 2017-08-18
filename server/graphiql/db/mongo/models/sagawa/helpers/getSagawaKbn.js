export default function getSagawaKbn(shippingCountry) {
  const {
    SAGAWA_ENV: sagawaEnv,
    SAGAWA_KBN_US: sagawaKbnUs,
    SAGAWA_KBN_JP: sagawaKbnJp,
    SAGAWA_KBN_US_TEST: sagawaKbnUsTest,
    SAGAWA_KBN_JP_TEST: sagawaKbnJpTest,
  } = process.env;

  if (sagawaEnv === 'development') {
    if (shippingCountry === 'JP') return sagawaKbnJpTest;
    return sagawaKbnUsTest;
  }
  if (shippingCountry === 'JP') return sagawaKbnJp;
  return sagawaKbnUs;
}
