import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FormattedMessage as IntlMsg } from 'react-intl';

const { func, string, bool } = PropTypes;

class CvnAndZip extends React.Component {
  static propTypes = {
    show: bool.isRequired,
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
    const nextPropsCopy = Object.assign({}, nextProps);
    delete nextPropsCopy.show;
    delete nextPropsCopy.toggleModal;
    delete nextPropsCopy.handleOnChange;

    if (!_.isEqual(nextProps, this.props)) {
      this.setState(prevState => ({
        ...prevState,
        ...nextPropsCopy,
      }));
    }
  }

  handleOnChange = e => this.props.handleOnChange(e);

  render() {
    const enableZip = this.state.ccRenderKey === 'renderWithZip';
    const { show } = this.props;
    return (
      <div className="input__row cvn" style={{ display: show ? '' : 'none' }}>
        <div className="input__row--cvn-number">
          <div className="cvn-number--wrapper">
            <p>CVV
              <span className="required">*</span>
            </p>
            <button
              type="button"
              data-modal="showCvnModal"
              className="button--cvn-modal"
              onClick={this.props.toggleModal}
            >
              <IntlMsg id="checkout.credit-card.cvn.whats-this" />
            </button>
          </div>
          <div id="sq-cvv" />
        </div>
        <div
          className="input__row--zip-code"
          style={{ visibility: enableZip ? 'visible' : 'hidden' }}
        >
          <p>
            <IntlMsg id="checkout.credit-card.postal-code" />&nbsp;
            <span className="required">*</span>
          </p>
          <div id="sq-postal-code" />
        </div>
      </div>
    );
  }
}
export default CvnAndZip;
