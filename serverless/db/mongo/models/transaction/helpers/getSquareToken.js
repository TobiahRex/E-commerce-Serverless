const {
  SQUARE_ENV: squareEnv,

  US_SQUARE_ACCESS_TOKEN: usSquareAccessToken,
  US_SQUARE_SANDBOX_ACCESS_TOKEN: usSquareSandboxAccessToken,

  JP_SQUARE_ACCESS_TOKEN: jpSquareAccessToken,
  JP_SQUARE_SANDBOX_ACCESS_TOKEN: jpSquareSandboxAccessToken,
} = process.env;

export default function getSquareToken(country) {
  if (country === 'US') {
    if (squareEnv === 'development') return usSquareSandboxAccessToken;
    return usSquareAccessToken;
  }

  if (squareEnv === 'development') return jpSquareSandboxAccessToken;
  return jpSquareAccessToken;
}
