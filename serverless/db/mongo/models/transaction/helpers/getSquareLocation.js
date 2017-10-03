const {
  US_SQUARE_LOCATION: usSquareLocation,
} = process.env;

export default function getSquareLocation() {
  return usSquareLocation;
}
