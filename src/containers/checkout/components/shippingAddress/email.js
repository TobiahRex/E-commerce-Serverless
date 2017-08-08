import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

class Email extends React.PureComponent {
  static propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    shippingEmail: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      email: props.shippingEmail,
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
      <div className="input__row">
        <div className="input__row--email">
          <p>Email <span className="required">*</span></p>
          <Validation.components.Input
            errorClassName="is-invalid-input"
            type="email"
            containerClassName=""
            name="shippingEmail"
            validations={['required', 'email']}
            onChange={this.handleOnChange}
            value={this.props.shippingEmail}
          />
        </div>
      </div>
    );
  }
}
export default Email;
