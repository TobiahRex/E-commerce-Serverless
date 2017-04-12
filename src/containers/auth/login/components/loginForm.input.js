import React, { PropTypes } from 'react';

const propTypes = {
  onInputChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

function LoginFormInput(onInputChange, type, slug) {
  return (
    <input
      type={type}
      id={slug}
      className={`${slug}__input--${slug}`}
      onChange={e => onInputChange(e.target.getElementBy('id'))}
    />
  );
}
LoginFormInput.propTypes = propTypes;
export default LoginFormInput;
