import ZipUserCart from './zipUserCart';
import CalculateTotalsDue from './calculateTotalsDue';
import CalculateDiscounts from './calculateDiscounts';
import DetermineCartType from './determineCartType';

const composeFinalTotal = ({
  taxRate,
  newUser,
  loggedIn,
  userCart,
  guestCart,
  FetchMultipleProducts,
}) => {
  const cart = DetermineCartType({
    loggedIn,
    guestCart,
    userCart,
    FetchMultipleProducts,
  }, ZipUserCart);

  const { taxes, grandTotal } = CalculateTotalsDue(cart, taxRate);

  const total = CalculateDiscounts(
    cart,
    taxes,
    grandTotal,
    newUser,
  );
  return ({ ...total });
};

export default composeFinalTotal;
