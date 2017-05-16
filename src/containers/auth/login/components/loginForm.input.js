import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const { func, string } = PropTypes;

class LoginFormInput extends PureComponent {
  static propTypes = {
    onInputChange: func.isRequired,
    className: string.isRequired,
    value: string.isRequired,
    type: string.isRequired,
    slug: string.isRequired,
  }

  onInputChange = (id, value) => this.props.onInputChange(id, value);

  render() {
    const { className, value, type, slug } = this.props;

    return (
      <input
        id={slug}
        type={type}
        value={value}
        className={className}
        onChange={e => this.onInputChange(e.target.getElementBy('id'), e.target.value)}
      />
    );
  }
}
export default LoginFormInput;
