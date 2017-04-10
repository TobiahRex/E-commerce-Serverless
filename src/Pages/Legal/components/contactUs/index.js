import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

export default function ContactUs() {
  return (
    <div className="contact-us__main">
      <div className="main__breadcrumb--container">
        <ul className="breadcrumb--list">
          <li className="list--home">
            <Link to="/">
              Home
              <FontAwesome className="breadcrumb-chevron-right" name="angle-right" />
            </Link>
          </li>
          <li className="list--path last">
            Contact Us
          </li>
        </ul>
      </div>
      <div className="main__title">
        <h1>Contact Us</h1>
      </div>
      <div className="main__body">
        <form action="submit">
          <div className="body__name--container">
            <label htmlFor="name__input" className="name__label">Name</label>
            <input
              id="name__input"
              type="text"
              value="Your Name"
              className="name__input"
            />
          </div>
          <div className="body__email--container">
            <label htmlFor="email__input" className="email__label">Email</label>
            <input
              id="email__input"
              type="text"
              value="Your Name"
              className="email__input"
            />
          </div>
          <div className="body__message--container">
            <label htmlFor="message__input" className="message__label">Message</label>
            <input
              id="message__input"
              type="text"
              value="Your Name"
              className="message__input"
            />
          </div>
          <div className="body__send-copy">
            <input
              id="email-copy__checkbox"
              type="checkbox"
              value="Your Name"
              className="email-copy__checkbox"
            />
            <label htmlFor="email-copy__checkbox" className="message__label">Send a copy of this email to yourself.</label>
          </div>
        </form>
      </div>
    </div>
  );
}
