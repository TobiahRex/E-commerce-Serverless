import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';
import './assets/styles/style.css';

export default function NotFound() {
  return (
    <div className="_404-page">
      <div className="_404-page__hdr-container">
        <h1 className="hdr-container__404-hdr-blurb">
          <FontAwesome name="eye-slash" className="_404-hdr-blurb__fa-icon" />&nbsp;
          <IntlMsg id="notfound.header" />
        </h1>
      </div>
      <div className="_404-page__404-blurb-container">
        <p className="_404-blurb-container__blurb-content">
          <IntlMsg id="notfound.subheader" />
        </p>
        <p className="_404-blurb-container__blurb-content">
          <IntlMsg id="notfound.blurb1" />
        </p>
        <p className="_404-blurb-container__blurb-content">
          <IntlMsg id="notfound.blurb2" />
        </p>
      </div>
      <div className="_404-page__back-btn-container">
        <button
          className="back-btn-container__404-btn sweep-right"
          onClick={() => browserHistory.push('/')}
        >
          <span className="_404-btn__fa-icon">
            <FontAwesome name="angle-double-left" />
          </span> &nbsp;
          <IntlMsg id="notfound.back.btn" />
        </button>
      </div>
    </div>
  );
}
