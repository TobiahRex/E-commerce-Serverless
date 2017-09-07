const {

  US_SQUARE_LOCATION: usSquareLocation,

  JP_SQUARE_LOCATION: jpSquareLocation,
} = process.env;

export default function getSquareLocation(country) {
  if (country === 'JP') return jpSquareLocation;
  return usSquareLocation;
}
