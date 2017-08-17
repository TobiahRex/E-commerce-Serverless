import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

class City extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      city: props.city,
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
            name={`${this.props.type}City`}
            validations={['required', 'alpha', 'city']}
            onChange={this.handleOnChange}
            value={this.props.city}
          />
        </div>
      </div>
    );
  }
}

const { string, func } = PropTypes;
City.propTypes = {
  city: string.isRequired,
  type: string.isRequired,
  handleOnChange: func.isRequired,
};
export default City;
