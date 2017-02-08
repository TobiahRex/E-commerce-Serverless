import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => (
  <span className="main-button">
    <div className="flag-us">
      <div className="image" />
    </div>
    <div className="navbar actionSection upper language title">
      <span>ENGLISH</span>
    </div>
    <div className="navbar actionSection upper language chevron">
      <FontAwesome
        name="angle-down" className="navbar actionSection upper language chevron icon"
      />
    </div>
  </span>
);
