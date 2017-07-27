import React from 'react';
import PropTypes from 'prop-types';

class Email extends React.PureComponent {
  static propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    billingEmail: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      email: props.billingEmail,
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
      <div className="input__row">
        <div className="input__row--email">
          <p>Email <span className="required">*</span></p>
          <input
            name="billingEmail"
            type="text"
            onChange={this.handlleOnChange}
            value={this.props.billingEmail}
          />
        </div>
      </div>
    );
  }
}
export default Email;
