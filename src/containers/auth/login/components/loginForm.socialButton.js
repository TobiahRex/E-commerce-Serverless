import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  slug: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

function SocialButton({ handler, slug }) {
  return (
    <button onClick={() => handler()}>
      <FontAwesome name={slug} />
    </button>
  );
}
SocialButton.propTypes = propTypes;
export default SocialButton;
