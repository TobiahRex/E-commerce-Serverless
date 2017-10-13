import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import {
  HdrBox,
  ProductTable,
  CommentBox,
  DiscountMsg,
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
    <div className="main-section__product-review">
      <HdrBox />
      <ProductTable cart={cart || []} />
      <CommentBox
        comments={comments}
        handleOnChange={handleOnChange}
        newsletterDecision={newsletterDecision}
      />

      {
        !loggedIn &&
          <DiscountMsg routerPush={routerPush} />
      }
    </div>
  );
}
const ProductReviewWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
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
