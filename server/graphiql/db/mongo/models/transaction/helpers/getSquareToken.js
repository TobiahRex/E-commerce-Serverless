const {

  US_SQUARE_ACCESS_TOKEN: usSquareAccessToken,

  JP_SQUARE_ACCESS_TOKEN: jpSquareAccessToken,
} = process.env;

export default function getSquareToken(country) {
  if (country === 'JP') return jpSquareAccessToken;
  return usSquareAccessToken;
}
