import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Validation from 'react-validation';

const { func, string } = PropTypes;

class CvnAndZip extends React.PureComponent {
  static propTypes = {
    ccRenderKey: string.isRequired,
    toggleModal: func.isRequired,
    ccCvn: string.isRequired,
    ccZip: string.isRequired,
    handleOnChange: func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      ccRenderKey: props.ccRenderKey,
      ccCvn: '',
      ccZip: '',
      zipError: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      ccRenderKey,
      ccCvn,
      ccZip,
    } = nextProps;

    if (!_.isEqual(nextProps, this.props)) {
      this.setState({
        ccRenderKey,
        ccCvn,
        ccZip,
      });
    }
  }

  handleOnChange = (e) => this.props.handleOnChange(e);

  render() {
    const enableZip = this.state.ccRenderKey === 'renderWithZip';

    return (
      <div className="input__row cvn">
        <div className="input__row--cvn-number">
          <div className="cvn-number--wrapper">
            <p>CVV <span className="required">*</span>
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
          <div id="sq-cvv" />
          {/* <Validation.components.Input
            id="sq-cvv"
            errorClassName="is-invalid-input"
            type="text"
            containerClassName=""
            name="ccCvn"
            validations={['required', 'ccCvn']}
            onChange={this.handleOnChange}
            value={this.state.ccCvn}
          /> */}

        </div>
        <div className="input__row--zip-code">
          <p>Zip Code
            { enableZip && <span className="required">*</span> }
          </p>
          <div id="sq-postal-code" />
          {/* <input
            id="sq-postal-code"
            type="text"
            className={this.state.zipError}
            // containerClassName=""
            name="ccZip"
            placeholder="99999"
            maxLength="5"
            // validations={['required', 'numeric']}
            pattern="\d{5}"
            onChange={this.handleOnChange}
            value={this.state.ccZip}
            required
          /> */}
        </div>
      </div>
    );
  }
}
export default CvnAndZip;
