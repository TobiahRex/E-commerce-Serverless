import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FormattedMessage as IntlMsg } from 'react-intl';

const { func, string } = PropTypes;

class CvnAndZip extends React.Component {
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
    return (
      <div className="input__row cvn">
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
        <div className="input__row--zip-code">
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
