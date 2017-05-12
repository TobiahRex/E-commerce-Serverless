import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  // location: PropTypes.objectOf(PropTypes.any).isRequired,
};

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
            <div className="header--date">
              <p>{new Date()}</p>
            </div>
          </div>
          <div className="header--title">
            <h3>{'"Greatest thing since sliced bread."'}</h3>
          </div>
        </div>
        <div className="reviews__product--info">
          <div className="info--image">
            <img src="https://s3-ap-northeast-1.amazonaws.com/nj2jp-images/nj2jp_juice_card_pc.png" alt="Nicotine Juice" />
          </div>
          <div className="info--desc">
            <div className="desc--main-title">
              <h3>Strawberries {'N\''} Cream</h3>
            </div>
            <div className="desc--sec-title">
              <h3>Secondary Product Title</h3>
            </div>
            <div className="desc--price">
              <h3>
                <FontAwesome name="usd" />
                12.12
              </h3>
            </div>
            <div className="desc--product-details">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
        <div className="reviews__product--action-btns">
          <button className="edit-review sweep-right primary-button">
            Edit Review
          </button>
          <button className="delete-review sweep-right primary-button">
            Delete Review
            {/* TODO: Create a "Are you sure you want to delete this product review?" Modal. */}
          </button>
          <button className="buy-again sweep-right primary-button">
            Buy Again
            {/* NOTE: Sends user to the single product page for this product. */}
          </button>
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
            <div className="header--date">
              <p>{new Date()}</p>
            </div>
          </div>
          <div className="header--title">
            <textarea type="text">
              {'"Greatest thing since sliced bread."'}
            </textarea>
          </div>
        </div>
        <div className="reviews__product--info">
          <div className="info--image">
            <img src="https://s3-ap-northeast-1.amazonaws.com/nj2jp-images/nj2jp_juice_card_pc.png" alt="Nicotine Juice" />
          </div>
          <div className="info--desc">
            <div className="desc--main-title">
              <h3>Strawberries {'N\''} Cream</h3>

            </div>
            <div className="desc--sec-title">
              <h3>Nicotine Strength: 6<i>mg</i> </h3>
            </div>
            <div className="desc--price">
              <h3>
                <FontAwesome name="usd" />
                12.12
              </h3>
            </div>
            {/* NOTE: Dynamically set the value of the input. */}
            <div className="desc--product-details">
              <textarea>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
            </div>
          </div>
        </div>
        <div className="reviews__product--edit-action-btns">
          <div className="action-section__save-btn">
            <button className="save-btn primary-flex-button sweep-right">
              Save Edit
            </button>
          </div>
          <div>
            <button className="save-btn primary-flex-button-saving sweep-right">
              <FontAwesome name="refresh" spin />
              {'\u00A0'} Saving...
            </button>
          </div>
          <div>
            <button className="save-btn primary-flex-button-saved sweep-right">
              <span className="flex-parent-btn">
                <FontAwesome name="check-circle" />
                {'\u00A0'} Saved!
                {/* NOTE:  After the edit has been saved, re-render component with the Presentation Component of the Review NOT the Edit Component of the review. */}
              </span>
            </button>
          </div>
          <button className="delete-review sweep-right primary-button">
            Cancel
          </button>
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
      </div>
      <div className="reviews__modals--delete" style={{ display: 'none' }}>
        {/* TODO:  Disable scrolling whenever this component is rendered. See /tools/disableScrolling.js */}
        <div className="modals__confirm-delete--container">
          <div className="confirm-delete__msg--container">
            <div className="msg">
              <p>Are you sure you want to Delete this product review?</p>
            </div>
            <div className="msg__action-btns">
              <div className="action-btns__cancel-btn">
                <button className="cancel-btn primary-flex-button sweep-right">
                  Cancel
                </button>
              </div>
              <div className="action-btns__delete-btn">
                <button className="delete-btn primary-flex-button sweep-right">
                  Delete
                </button>
              </div>
              <div>
                <button className="save-btn primary-flex-button-saving sweep-right">
                  <FontAwesome name="refresh" spin />
                  {'\u00A0'} Deleting...
                  {/* NOTE:  When this button is displayed, the "Cancel" button needs to be hidden. */}
                </button>
              </div>
              <div>
                <button className="save-btn primary-flex-button-saved sweep-right">
                  <span className="flex-parent-btn">
                    <FontAwesome name="trash" />
                    {'\u00A0'} Deleted!
                    {/* NOTE:  After the reviews has been deleted, re-render component with the Presentation Component. */}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
OrderReviews.propTypes = propTypes;
export default OrderReviews;
