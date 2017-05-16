import React from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  faName: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

function SocialButton({ callback, slug, faName }) {
  if (slug !== 'loginWithLine') {
    return (
      <button data-tag={slug} onClick={callback}>
        <FontAwesome name={faName} />
      </button>
    );
  }
  return (
    <button data-tag={slug} onClick={callback}>
      <img src="https://s3-ap-northeast-1.amazonaws.com/nj2jp-images/line_logo.png" alt="Line" />
    </button>
  );
}
SocialButton.propTypes = propTypes;
export default SocialButton;
