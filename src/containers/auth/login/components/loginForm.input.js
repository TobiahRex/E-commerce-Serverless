import React, { PropTypes, PureComponent } from 'react';

class LoginFormInput extends PurComponent {
  static propTypes = {
    onInputChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }

  onInputChange = (id, value) => this.props.onInputChange(id, value);

  render () {
    const {
      onInputChange,
      className,
      value
      type,
      slug,
    } = this.props

    return (
      <input
        onChange={e =>
          onInputChange(e.target.getElementBy('id'), e.target.value)
        }
        className={className}
        value={value}
        type={type}
        id={slug}
      />
    );
  }
}
export default LoginFormInput;
