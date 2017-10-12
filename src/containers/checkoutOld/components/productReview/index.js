import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import { FormattedMessage as IntlMsg } from 'react-intl';

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
  console.warn('hello?');
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

      <NewsletterOption
        handleOnChange={handleOnChange}
        newsletterDecision={newsletterDecision}
      />

      {!loggedIn && <NewUserDiscountOffer routerPush={routerPush} />}
    </div>
  );
}

const ProductReviewWithLifecycle = lifecycle({
  shouldComponentupdate(nextProps) {
    console.log('%cnextProps', 'background:red;', nextProps);

    const npCopy = _.cloneDeep(nextProps);
    const tpCopy = _.cloneDeep(this.props);

    if (!_.isEqual(npCopy, tpCopy)) return true;
    return false;
  },
})(ProductReview);

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
export default ProductReviewWithLifecycle;
