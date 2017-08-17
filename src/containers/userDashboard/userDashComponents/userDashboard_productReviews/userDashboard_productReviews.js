import React from 'react';
import FontAwesome from 'react-fontawesome';
import MobileProductReviews from './userDashboard_productReviews_mobile/userDashboard_productReviews_mobile';

function OrderReviews() {
  return (
    <div className="dashboard__reviews-container">
      <div className="reviews__msg">
        <p>These are your public product reviews. You can edit or delete your reviews, or perhaps add to your cart again.  In any case, we are very grateful for your feedback!</p>
      </div>

      <div className="reviews__qty">
        <h3>Product Reviews</h3>
        <div>
          <h3>2</h3>
        </div>
      </div>

      <div className="reviews--single-review">
        <div className="reviews__header">
          <div className="header--stars">
            <h3>1.</h3>
            <div className="stars--container">
              <FontAwesome name="star" />
              <FontAwesome name="star" />
              <FontAwesome name="star" />
              <FontAwesome name="star" />
              <FontAwesome name="star" />
            </div>
          </div>
          <div className="header--title">
            <h3>{'"Greatest thing since sliced bread."'}</h3>
          </div>
          <div className="header--date">
            <p>{new Date()}</p>
          </div>
        </div>
        <div className="reviews__product--info">
          <div className="info--image">
            <img src="/images/nj2jp_juice_card_pc.pngg" alt="Nicotine Juice" />
          </div>
          <div className="info--desc">
            <div className="desc--main-title">
              <h3>Strawberries {'N\''} Cream</h3>
              <button className="edit-review sweep-right medium-size-btn">
                Edit Review
              </button>
            </div>
            <div className="desc--sec-title">
              <h3>Secondary Product Title</h3>
              <button className="delete-review sweep-right medium-size-btn">
                Delete Review
              </button>
            </div>
            <div className="desc--price">
              <h3>
                <FontAwesome name="usd" />
                12.12
              </h3>
              <button className="buy-again sweep-right medium-size-btn">
                Buy Again
              </button>
            </div>
            <div className="desc--product-details">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews--single-review-edit">
        <div className="reviews__header">
          <div className="header--stars">
            <h3>1.</h3>
            <div className="stars--container">
              <button>
                <FontAwesome name="star" />
              </button>
              <button>
                <FontAwesome name="star" />
              </button>
              <button>
                <FontAwesome name="star" />
              </button>
              <button>
                <FontAwesome name="star" />
              </button>
              <button>
                <FontAwesome name="star" />
              </button>
            </div>
          </div>
          <div className="header--title">
            <input type="text" value={'"Greatest thing since sliced bread."'} />
          </div>
          <div className="header--date">
            <p>{new Date()}</p>
          </div>
        </div>
        <div className="reviews__product--info">
          <div className="info--image">
            <img src="/images/nj2jp_juice_card_pc.png" alt="Nicotine Juice" />
          </div>
          <div className="info--desc">
            <div className="desc--main-title">
              <h3>Strawberries {'N\''} Cream</h3>
              <button className="edit-review sweep-right medium-size-btn">
                Edit Review
              </button>
            </div>
            <div className="desc--sec-title">
              <h3>Nicotine Strength: 6<i>mg</i> </h3>
              <button className="delete-review sweep-right medium-size-btn">
                Delete Review
              </button>
            </div>
            <div className="desc--price">
              <h3>
                <FontAwesome name="usd" />
                12.12
              </h3>
              <button className="buy-again sweep-right medium-size-btn">
                Buy Again
              </button>
            </div>
            {/* NOTE: Dynamically set the value of the input. */}
            <div className="desc--product-details">
              <textarea>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
            </div>
          </div>
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
  );
}
OrderReviews.Mobile = MobileProductReviews;
export default OrderReviews;
