import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Validation from 'react-validation';

const { string, func } = PropTypes;

class CreditCardCvn extends PureComponent {
  static propTypes = {
    toggleModal: func.isRequired,
    ccCvn: string.isRequired,
    handleOnChange: func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      ccCvn: '',
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
      <div className="input__row cvn">
        <div className="input__row--cvn-number">
          <p>Card Verification Number (CVN) <span className="required">*</span></p>

          <Validation.components.Input
            errorClassName="is-invalid-input"
            type="text"
            containerClassName=""
            name="ccCvn"
            validations={['required', 'ccCvn']}
            onChange={this.handleOnChange}
            value={this.state.ccCvn}
          />

          <button
            type="button"
            data-modal="showCvnModal"
            className="button--cvn-modal"
            onClick={this.props.toggleModal}
          >
            Whats this ?
          </button>

        </div>
      </div>
    );
  }
}
export default CreditCardCvn;
