import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

export default function NotFound() {
  return (
    <div className="not-found--main">
      <div className="not-found--container">
        <div className="not-found__title">
          <div className="title--icon">
            <FontAwesome name="eye-slash" />
          </div>
          <h1>404 - Page Not Found</h1>
        </div>
        <div className="not-found__body">
          <h4>The page you requested was not found.</h4>
          <br />
          <h4>If you typed the URL directly, make sure the spelling is correct.</h4>
          <br />
          <h4>If you clicked a link to get here, then the link is outdated.  We apologize.</h4>
          <br />
        </div>
        <div className="not-found_home-btn">
          <button
            className="sweep-right"
            onClick={() => browserHistory.push('/')}
          >Home</button>
        </div>
      </div>
    </div>
  );
}
