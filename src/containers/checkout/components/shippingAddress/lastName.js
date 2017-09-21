import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';

class LastName extends React.PureComponent {
  static propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    shippingLastName: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      shippingLastName: props.shippingLastName,
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
      <div className="input__row--last-name">
        <p>
          <IntlMsg id="checkout.shipping-address.last-name" />&nbsp;
          <span className="required">*</span>
        </p>
        <Validation.components.Input
          errorClassName="is-invalid-input"
          type="text"
          containerClassName=""
          name="shippingLastName"
          validations={['required', 'alpha']}
          onChange={this.handleOnChange}
          value={this.props.shippingLastName}
        />
      </div>
    );
  }
}
export default LastName;
