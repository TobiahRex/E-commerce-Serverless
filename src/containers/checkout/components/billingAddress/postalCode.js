import React from 'react';
import PropTypes from 'prop-types';

class PostalCode extends React.PureComponent {
  static propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    billingPostalCode: PropTypes.number,
  }

  static defaultProps = {
    billingPostalCode: '',
  }

  constructor(props) {
    super(props);

    this.state = {
      billingPostalCode: props.billingPostalCode,
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
      <div className="input__row">
        <div className="input__row--postal-code">
          <p>Postal Code <span className="required">*</span></p>
          <input
            name="billingPostalCode"
            type="text"
            onChange={this.handleOnChange}
            value={this.props.billingPostalCode}
          />
        </div>
      </div>
    );
  }
}
export default PostalCode;
