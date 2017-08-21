const {
  SQUARE_ENV: squareEnv,

  US_SQUARE_SANDBOX_LOCATION: usSquareSandboxLocation,
  US_SQUARE_LOCATION: usSquareLocation,

  JP_SQUARE_SANDBOX_LOCATION: jpSquareSandboxLocation,
  JP_SQUARE_LOCATION: jpSquareLocation,
} = process.env;

export default function getSquareLocation(country) {
  if (country === 'US') {
    if (squareEnv === 'development') return usSquareSandboxLocation;
    return usSquareLocation;
  }

  if (squareEnv === 'development') return jpSquareSandboxLocation;
  return jpSquareLocation;
}
