import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

export default function ContactUs() {
  return (
    <div className="contact-us__main">
      <div style={{ padding: '4em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>This page is under construction.  It'll be finished soon.</h1>
      </div>
      {/* <div className="main__breadcrumb--container">
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
        <form
          action="submit"
          onSubmit={(e) => {
            e.preventDefault(); console.info('form submit');
          }}
        >
          <div className="body__name--container">
            <label htmlFor="name__input" className="name__label">Name</label>
            <input
              id="name__input"
              type="text"
              value="Your Name"
              className="name__input"
              onChange={e => console.info(e.target.value)}
            />
          </div>
          <div className="body__email--container">
            <label htmlFor="email__input" className="email__label">Email</label>
            <input
              id="email__input"
              type="text"
              value="your@email.com"
              className="email__input"
              onChange={e => console.info(e.target.value)}
            />
          </div>
          <div className="body__message--container">
            <label htmlFor="message__input" className="message__label">Message</label>
            <input
              id="message__input"
              type="text"
              value="NJ2JP is awesome!"
              className="message__input"
              onChange={e => console.info(e.target.value)}
            />
          </div>
          <div className="body__send-copy">
            <input
              id="email-copy__checkbox"
              type="checkbox"
              className="email-copy__checkbox"
            />
            <label htmlFor="email-copy__checkbox" className="message__label">Send a copy of this email to yourself.</label>
          </div>
          <div className="body__submit-button--container">
            <button
              className="submit-button"
              type="submit"
              onClick={() => console.info('clicked submit button')}
            >
              Send
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
}
