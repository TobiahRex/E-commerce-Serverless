import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FormattedMessage as IntlMsg } from 'react-intl';
import TotalContent from './totalContent';
import Loading from './loading';

const { bool, shape, number, func } = PropTypes;

class GrandTotal extends React.Component {
  static propTypes = {
    handleOnChange: func.isRequired,
    termsAgreement: bool.isRequired,
    showTotal: bool.isRequired,
    total: shape({
      subTotal: number,
      taxes: number,
      grandTotal: number,
      discount: shape({
        qty: bool,
        qtyAmount: number,
        register: bool,
        registerAmount: number,
      }),
    }).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      termsAgreement: false,
      showTotal: false,
      total: {
        discount: {
          qty: false,
          qtyAmount: 0,
          register: false,
          registerAmount: 0,
        },
        taxes: 0,
        grandTotal: 0,
        subTotal: 0,
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextPropsCopy = Object.assign({}, nextProps);
    delete nextPropsCopy.handleOnChange;
    if (!_.isEqual(nextProps, this.props, true)) this.setState({ ...nextPropsCopy });
  }

  shouldComponentUpdate(nextProps) {
    if (
      !_.isEqual(nextProps.total, this.props.total) ||
      !_.isEqual(nextProps, this.props)
    ) return true;
    return false;
  }

  handleOnChange = e => this.props.handleOnChange(e)

  renderHelper = (state) => {
    const {
      total: {
        subTotal,
        taxes,
        grandTotal,
        discount,
      },
      showTotal,
      termsAgreement,
    } = state;

    if (showTotal) {
      return (
        grandTotal ?
          <TotalContent
            subTotal={subTotal}
            taxes={taxes}
            discount={discount}
            grandTotal={grandTotal}
            termsAgreement={termsAgreement}
            handleOnChange={this.handleOnChange}
          /> : <Loading />
      );
    }
    return (
      <div>
        <h4 style={{ color: '#365899', padding: '2em 0em 1em 0em' }}>
          <span className="required">
            <IntlMsg id="checkout.total.empty-cart" />
          </span>
        </h4>
      </div>
    );
  }
  render() {
    return (
      <div className="checkout__grand-total">
        {this.renderHelper(this.state)}
      </div>
    );
  }
}

export default GrandTotal;
