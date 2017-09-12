import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => (
  <a
    onClick={() => console.warn('Need to create and add Instagram link here')}
    href="/"
    id="media-dropdown-instagram-icon"
    className="media-dropdown-content-bottomThird-innerContainer-smedia"
  >
    <FontAwesome
      name="instagram"
      className="media-dropdown-content-bottomThird-innerContainer-smedia-icon"
    />
  </a>
);
