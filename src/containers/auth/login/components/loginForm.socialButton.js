import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  slug: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

function SocialButton({ callback, slug }) {
  return (
    <button onClick={() => callback()}>
      <FontAwesome name={slug} />
    </button>
  );
}
SocialButton.propTypes = propTypes;
export default SocialButton;
