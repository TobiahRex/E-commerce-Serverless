import React, { PropTypes } from 'react';

const propTypes = {
  onInputChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

function LoginFormInput(
  onInputChange,
  type,
  slug,
  className,
  value
) {
  return (
    <input
      type={type}
      id={slug}
      className={className}
      onChange={e => onInputChange(e.target.getElementBy('id'))}
      value={value}
    />
  );
}
LoginFormInput.propTypes = propTypes;
export default LoginFormInput;
