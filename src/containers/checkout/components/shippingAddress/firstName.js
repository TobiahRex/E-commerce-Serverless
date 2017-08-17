import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

class FirstName extends React.PureComponent {
  static propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    shippingFirstName: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      shippingFirstName: '',
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
      <div className="input__row--first-name">
        <p>Given Name <span className="required">*</span></p>
        <Validation.components.Input
          errorClassName="is-invalid-input"
          type="text"
          containerClassName=""
          name="shippingFirstName"
          validations={['required', 'alpha']}
          onChange={this.handleOnChange}
          value={this.props.shippingFirstName}
        />
      </div>
    );
  }
}
export default FirstName;
