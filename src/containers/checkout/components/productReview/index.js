import React from 'react';
import PropTypes from 'prop-types';
import ProductTable from './productTable';
import NewsletterOption from './newsletterOption';
import ProductReviewComment from './productReviewComment';

function ProductReview({
  cart,
  routerPush,
  newsletterDecision,
  handleNewsletterChange,
}) {
  return (
    <div className="checkout__product-review">
      <div className="title">
        <h3>Product Review</h3>
      </div>
      <ProductTable cart={cart || []} />

      <ProductReviewComment />

      <NewsletterOption
        newsletterDecision={newsletterDecision}
        handleNewsletterChange={handleNewsletterChange}
      />

      <div className="input__row">
        <div className="input__row--guest-warning">
          <p><span className="warning-bold">Warning: </span>You are currently checking out as a “Guest”. If you would like to save your checkout info for future purchases, register now and we will save your information & you will receive 10% off your first order as a new member.</p>
        </div>
      </div>

      <div className="input__row">
        <div className="input__row--guest-register">
          <button
            className="guest-register sweep-right"
            slug="register"
            onClick={routerPush}
          >
            Register & Save 10%
          </button>

        </div>
      </div>
    </div>
  );
}
const { arrayOf, object, func, bool, string } = PropTypes;
ProductReview.propTypes = {
  cart: arrayOf(object).isRequired,
  routerPush: func.isRequired,
  newsletterDecision: bool.isRequired,
  productReviewComment: string.isRequired,
  handleNewsletterChange: func.isRequired,
};
export default ProductReview;
