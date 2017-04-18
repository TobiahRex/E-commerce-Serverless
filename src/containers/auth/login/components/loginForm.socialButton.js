import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  slug: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

function SocialButton({ callback, slug }) {
  if (slug !== 'line') {
    return (
      <button onClick={callback}>
        <FontAwesome name={slug} />
      </button>
    );
  }
  return (
    <button onClick={callback}>
      <img src="../images/line_logo.png" alt="Line" />
    </button>
  );
}
SocialButton.propTypes = propTypes;
export default SocialButton;
