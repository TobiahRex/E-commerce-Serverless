import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

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
const { string, func } = PropTypes;
const propTypes = {
  faName: string.isRequired,
  slug: string.isRequired,
  callback: func.isRequired,
};

SocialButton.propTypes = propTypes;
export default SocialButton;
