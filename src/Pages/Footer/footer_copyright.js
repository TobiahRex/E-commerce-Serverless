import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function FooterCopyright() {
  return (
    <div className="footer-copyright">
      <p className="copyright-message">
        Copyright <FontAwesome name="copyright" /> 2017
      </p>
      <p className="developer-message">
        Made with <FontAwesome className="developer-heart" name="heart" /> by @TobiahRex
      </p>
    </div>
  );
}
