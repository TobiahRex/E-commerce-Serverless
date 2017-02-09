import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () => (
  <a
    onClick={() => console.warn('Need to create and add Youtube link here')}
    href="/"
    id="media-dropdown-youtube-icon"
    className="media-dropdown-content-bottomThird-innerContainer-smedia"
  >
    <FontAwesome
      name="youtube"
      className="media-dropdown-content-bottomThird-innerContainer-smedia-icon"
    />
  </a>
);
