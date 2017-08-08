import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import TotalContent from './totalContent';
import Loading from './loading';

const { bool, func, shape, number } = PropTypes;

class GrandTotal extends React.PureComponent {
  static propTypes = {
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
    handleOnChange: func.isRequired,
    termsAgreement: bool.isRequired,
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

  handleOnChange = e => this.props.handleOnChange(e);

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
      <h5>Your cart is currently Empty.</h5>
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
