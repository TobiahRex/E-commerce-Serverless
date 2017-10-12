import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';
import {
  ProductTable,
  NewsletterOptIn,
  ProductReviewComment,
  NewUserDiscountOffer,
} from './components';

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
        <h3><IntlMsg id="checkout.product-review.title" /></h3>
      </div>

      <ProductTable cart={cart || []} />

      <ProductReviewComment
        comments={comments}
        handleOnChange={handleOnChange}
      />

      <NewsletterOptIn
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
  newsletterDecision: bool.isRequired,
  handleOnChange: func.isRequired,
};
ProductReview.defaultProps = {
  comments: '',
  cart: [],
};
export default ProductReview;
