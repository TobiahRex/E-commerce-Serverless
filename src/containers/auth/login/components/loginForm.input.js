import React, { PropTypes, PureComponent } from 'react';

class LoginFormInput extends PureComponent {
  static propTypes = {
    onInputChange: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
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
