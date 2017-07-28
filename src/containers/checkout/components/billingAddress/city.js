import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

class City extends React.PureComponent {
  static propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    billingCity: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      billingCity: props.billingCity,
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
      <div className="input__row">
        <div className="input__row--city">
          <p>City <span className="required">*</span></p>
          <Validation.components.Input
            errorClassName="is-invalid-input"
            type="text"
            containerClassName=""
            name="billingCity"
            validations={['required', 'alpha']}
            onChange={this.handleOnChange}
            value={this.props.billingCity}
          />
        </div>
      </div>
    );
  }
}
export default City;
