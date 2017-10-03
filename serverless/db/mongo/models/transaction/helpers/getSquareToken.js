const {
  US_SQUARE_ACCESS_TOKEN: usSquareAccessToken,
} = process.env;

export default function getSquareToken() {
  return usSquareAccessToken;
}
