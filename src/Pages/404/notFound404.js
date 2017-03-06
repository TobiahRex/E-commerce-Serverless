import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

export default function NotFound() {
  return (
    <div className="404--main">
      <div className="404--container">
        <div className="404__title">
          <div className="title--icon">
            <FontAwesome name="eye-slash" />
          </div>
          <h1>404 - Page Not Found</h1>
        </div>
        <div className="404__body">
          <h5>The page you requested was not found.</h5>

          <h5>If you types the URL directly, make sure the spelling is correct.</h5>

          <h5>If you clicked a link to get here, then the link is outdated.  We apologize.</h5>

        </div>
        <div className="404_home-btn">
          <button
            className="sweep-right"
            onClick={() => browserHistory.push('/')}
          >Home</button>
        </div>
      </div>
    </div>
  );
}
