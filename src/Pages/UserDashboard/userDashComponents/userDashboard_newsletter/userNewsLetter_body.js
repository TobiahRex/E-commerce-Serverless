import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  // location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function UserNewsletter() {
  return (
    <div className="newsletter--container">
      <div className="newsletter__title">
        <h1>Newsletter Subscriptions</h1>
      </div>
      <div className="newsletter__user-input">
        <button type="text" className="user-input__check-box" />
        <p>Subscribed to Email & Newsletter & Promotions.</p>
      </div>

      <div className="newsletter__action-section--container">
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
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
UserNewsletter.propTypes = propTypes;
export default UserNewsletter;
