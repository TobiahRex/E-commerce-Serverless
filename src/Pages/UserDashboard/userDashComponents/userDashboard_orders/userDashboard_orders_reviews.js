import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

const propTypes = {
  // location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function LoadingIcon() {
  return (
    <div className="dashboard__reviews-container">
      <div className="reviews__msg">
        <p>These are your public product reviews. You can edit or delete your reviews, or perhaps add to your cart again.  In any case, we are very grateful for your feedback!</p>
      </div>

      <div className="reviews__qty">
        <p>Product Reviews</p>
        <div>
          <p>2</p>
        </div>
      </div>

      <div className="reviews__header">
        <div className="header--stars">
          <FontAwesome name="star" />
          <FontAwesome name="star" />
          <FontAwesome name="star" />
          <FontAwesome name="star" />
          <FontAwesome name="star" />
        </div>
        <div className="header--title">
          <p>Review Title</p>
        </div>
        <div className="header--date">
          <p>{moment().format('LL')}</p>
        </div>
      </div>

      <div className="reviews__product--info ">
        <div className="info-image">
          <img src="../Images/nj2jp_juice_card_pc.png" alt="Nicotine Juice" />
        </div>
        <div className="info-desc">
          <div className="info-desc--main-title ">
            <p>Main Product Title</p>
            <button className="edit-review sweep-right medium-size-btn">
              Edit Review
            </button>
          </div>
          <div className="info-desc--sec-title">
            <p>Secondary Product Title</p>
            <button className="delete-review sweep-right medium-size-btn">
              Delete Review
            </button>
          </div>
          <div className="info-desc--price">
            <p>
              <FontAwesome name="usd" />
              12.12
            </p>
            <button className="buy-again sweep-right medium-size-btn">
              Buy Again
            </button>
          </div>
          <div className="info-desc--product-details">
            <p>Review Text</p>
          </div>
        </div>

        <div className="reviews__action-section--container">
          <div className="action-section__back-btn">
            <button className="back-btn primary-flex-button sweep-right">
              <span className="flex-parent-btn">
                <FontAwesome name="angle-double-left" />
                {'\u00A0'}
                Back
              </span>
            </button>
          </div>


          <div className="action-section__save-btn">
            <button className="save-btn primary-flex-button sweep-right">
              Save Addresses
            </button>
          </div>
        </div>


      </div>
    </div>
  );
}
LoadingIcon.propTypes = propTypes;
export default LoadingIcon;
