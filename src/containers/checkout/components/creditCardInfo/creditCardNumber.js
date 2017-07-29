import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Validation from 'react-validation';

const { string, func } = PropTypes;

class CreditCardNumber extends React.PureComponent {
  static propTypes = {
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
    const nextPropsCopy = Object.assign({}, nextProps);
    delete nextPropsCopy.handleOnChange;
    if (!_.isEqual(nextProps, this.props)) this.setState({ ...nextPropsCopy });
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
      <div className="input__row">
        <div className="input__row--cc-number">
          <p>Credit Card Number <span className="required">*</span></p>
          <Validation.components.Input
            errorClassName="is-invalid-input"
            type="text"
            containerClassName=""
            name="ccNumber"
            validations={['required', 'ccNumber']}
            onChange={this.handleOnChange}
            value={this.state.ccNumber}
          />
        </div>
      </div>
    );
  }
}
export default CreditCardNumber;
