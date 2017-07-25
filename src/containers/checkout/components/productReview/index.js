import React from 'react';

import PrComment from './prComment';
import ProductTable from './productTable';
import NewsletterOption from './newsletterOption';

export default function ProductReview() {
  return (
    <div className="checkout__product-review">
      <div className="title">
        <h3>Product Review</h3>
      </div>
      <ProductTable cart={this.props.cart} />

      <PrComment
        onInputChange={this.props.onInputChange}
        prCommentValue={this.props.prCommentValue}
      />
      
      <NewsletterOption optionValue={this.props.nlOptionValue} />

      <div className="input__row">
        <div className="input__row--guest-warning">
          <p><span className="warning-bold">Warning: </span>You are currently checking out as a “Guest”. If you would like to save your checkout info for future purchases, register now and we will save your information & you will receive 10% off your first order as a new member.</p>
        </div>
      </div>

      <div className="input__row">
        <div className="input__row--guest-register">
          <button className="guest-register sweep-right" onClick={() => browserHistory.push('/register')}>
            Register & Save 10%
          </button>
        </div>
      </div>
    </div>
  );
}
