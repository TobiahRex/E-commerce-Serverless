import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

class PostalCode extends React.PureComponent {
  static propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    billingPostalCode: PropTypes.string,
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
          {/* <input
            name="billingPostalCode"
            type="number"
            onChange={this.handleOnChange}
            value={this.props.billingPostalCode || ''}
            placeholder={87505}
            required
          /> */}
          <Validation.components.Input
            errorClassName="is-invalid-input"
            type="text"
            containerClassName=""
            name="billingPostalCode"
            validations={['required', 'numeric']}
            onChange={this.handleOnChange}
            value={this.props.billingPostalCode}
          />
        </div>
      </div>
    );
  }
}
export default PostalCode;
