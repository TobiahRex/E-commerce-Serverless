import React from 'react';
import PropTypes from 'prop-types';
import ProductTable from './productTable';
import NewsletterOption from './newsletterOption';
import ProductReviewComment from './productReviewComment';
import NewUserDiscountOffer from './newUserDiscountOffer';

function ProductReview({
  cart,
  comments,
  loggedIn,
  routerPush,
  newsletterDecision,
  handleOnChange,
}) {
  return (
    <div className="checkout__product-review">
      <div className="title">
        <h3>Product Review</h3>
      </div>
      <ProductTable cart={cart || []} />

      <ProductReviewComment
        comments={comments}
        handleOnChange={handleOnChange}
      />

      <NewsletterOption
        handleOnChange={handleOnChange}
        newsletterDecision={newsletterDecision}
      />

      {!loggedIn && <NewUserDiscountOffer routerPush={routerPush} />}
    </div>
  );
}
const { arrayOf, object, func, bool, string } = PropTypes;
ProductReview.propTypes = {
  cart: arrayOf(object),
  comments: string,
  loggedIn: bool.isRequired,
  routerPush: func.isRequired,
  newsletterDecision: string.isRequired,
  handleOnChange: func.isRequired,
};
ProductReview.defaultProps = {
  comments: '',
  cart: [],
};
export default ProductReview;
