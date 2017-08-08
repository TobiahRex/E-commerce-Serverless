import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Validation from 'react-validation';

const { func, string } = PropTypes;

class CvnAndZip extends PureComponent {
  static propTypes = {
    toggleModal: func.isRequired,
    ccCvn: string.isRequired,
    ccZip: string.isRequired,
    handleOnChange: func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      ccCvn: '',
      ccZip: '',
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
          <div className="cvn-number--wrapper">
            <p>CVN <span className="required">*</span>
            </p>
            <button
              type="button"
              data-modal="showCvnModal"
              className="button--cvn-modal"
              onClick={this.props.toggleModal}
            >
              Whats this ?
            </button>
          </div>
          <Validation.components.Input
            errorClassName="is-invalid-input"
            type="text"
            containerClassName=""
            name="ccCvn"
            validations={['required', 'ccCvn']}
            onChange={this.handleOnChange}
            value={this.state.ccCvn}
          />

        </div>
        <div className="input__row--zip-code">
          <p>Zip / Postal Code <span className="required">*</span></p>
          <Validation.components.Input
            errorClassName="is-invalid-input"
            type="text"
            containerClassName=""
            name="ccZip"
            validations={['required', 'numeric']}
            onChange={this.handleOnChange}
            value={this.state.ccZip}
          />
        </div>
      </div>
    );
  }
}
export default CvnAndZip;
