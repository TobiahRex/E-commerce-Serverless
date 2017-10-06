import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

const { string, func, bool } = PropTypes;

class CreditCardNumber extends React.Component {
  static propTypes = {
    show: bool.isRequired,
    ccNumber: string.isRequired,
    handleOnChange: func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      ccNumber: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      ccNumber,
    } = nextProps;
    if (nextProps !== this.props) {
      this.setState({ ccNumber });
    }
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
      <div className="input__row">
        <div className="input__row--cc-number">
          <p>
            <IntlMsg id="checkout.credit-card.number" />&nbsp;
            <span className="required">*</span>
          </p>
          <div id="sq-card-number" />
        </div>
      </div>
    );
  }
}
export default CreditCardNumber;
