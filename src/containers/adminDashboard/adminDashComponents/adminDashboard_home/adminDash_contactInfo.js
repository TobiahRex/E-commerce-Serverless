import React from 'react';
import PropTypes from 'prop-types';

const { objectOf, any } = PropTypes;
const propTypes = {
  location: objectOf(any).isRequired,
};

function Web() {
  return (
    <div className="dashboard__contact-info--container">
      <div className="contact-info">
        <div className="contact-info__title admin-dash__small-title">
          <h3>Contact Info</h3>
        </div>
        <div className="contact-info__info">
          {/* TODO:  Render this information dynamically */}
          <p className="info--name">Bruce Wayne</p>
          <p className="info--email">bruce.wayne@wayneenterprises.com</p>
          <p className="info--phone">(123)-123-1234</p>
        </div>
        <div className="contact-info__edit-btn">
          <button className="small-edit-btn sweep-right">Edit</button>
        </div>
      </div>
    </div>
  );
}
Web.propTypes = propTypes;

function Mobile() {
  return (
    <div className="dashboard__contact-info--container">
      <div className="contact-info">
        <div className="contact-info__title admin-dash__small-title">
          <h3>Contact Info</h3>
        </div>
        <div className="contact-info__info">
          {/* TODO:  Render this information dynamically */}
          <p className="info--name">Bruce Wayne</p>
          <p className="info--email">bruce.wayne@wayneenterprises.com</p>
          <p className="info--phone">(123)-123-1234</p>
        </div>
        <div className="contact-info__edit-btn">
          <button className="small-edit-btn sweep-right">Edit</button>
        </div>
      </div>
      <div className="top-half--password">
        <div className="password__input">
          <label htmlFor="login-method--password">Password</label>
          <input type="password" id="login-method--password" value="password1234" disabled />
        </div>
        <div className="password__edit-btn">
          <button className="medium-size-btn sweep-right">Change Password</button>
        </div>
      </div>
    </div>
  );
}
Mobile.propTypes = propTypes;

const ContactInfo = { Web, Mobile };
export default ContactInfo;
