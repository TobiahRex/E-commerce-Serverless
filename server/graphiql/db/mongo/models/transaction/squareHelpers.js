const {
  SQUARE_ENV: squareEnv,
  SQUARE_SANDBOX_LOCATION: squareSandboxLocation,

  US_SQUARE_LOCATION: usSquareLocation,
  US_SQUARE_ACCESS_TOKEN: usSquareAccessToken,
  US_SQUARE_SANDBOX_ACCESS_TOKEN: usSquareSandboxAccessToken,


  JP_SQUARE_LOCATION: jpSquareLocation,
  JP_SQUARE_ACCESS_TOKEN: jpSquareAccessToken,
  JP_SQUARE_SANDBOX_ACCESS_TOKEN: jpSquareSandboxAccessToken,
} = process.env;

export const getSqLocation = (country) => {
  if (squareEnv === 'development') return squareSandboxLocation;
  if (country === 'US') return usSquareLocation;
  return jpSquareLocation;
};

export const getSqToken = (country) => {
  if (country === 'US') {
    if (squareEnv === 'development') return usSquareSandboxAccessToken;
    return usSquareAccessToken;
  }

  if (squareEnv === 'development') return jpSquareSandboxAccessToken;
  return jpSquareAccessToken;
};
