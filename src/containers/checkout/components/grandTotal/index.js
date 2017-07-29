import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import Validation from 'react-validation';

const { bool, func, shape, number } = PropTypes;

class GrandTotal extends React.PureComponent {
  static propTypes = {
    total: shape({
      subTotal: number.isRequired,
      taxes: number.isRequired,
      grandTotal: number.isRequired,
      discount: shape({
        qty: bool.isRequired,
        qtyAmount: number.isRequired,
        register: bool.isRequired,
        registerAmount: number.isRequired,
      }).isRequired,
    }).isRequired,
    handleOnChange: func.isRequired,
    termsAgreement: bool.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      termsAgreement: false,
      total: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextPropsCopy = Object.assign({}, nextProps);
    delete nextPropsCopy.handleOnChange;
    if (!_.isEqual(nextProps, this.props, true)) this.setState({ ...nextPropsCopy });
  }

  handleOnChange = e => this.props.handleOnChange(e);

  render() {
    const {
      total: {
        subTotal,
        taxes,
        grandTotal,
        discount,
      },
      termsAgreement,
    } = this.state;
    return (
      <div className="checkout__grand-total">
        <div className="title">
          <h3>Total</h3>
        </div>

        <div className="analysis-container">

          <div className="analysis-container--subtotal">
            <p>Subtotal</p>
            <p><FontAwesome name="usd" />{'\u00A0'}{subTotal}</p>
          </div>

          <div className="analysis-container--shipping">
            <p>Shipping & Handling</p>
            <p><i>Free</i></p>
          </div>

          {
              discount.qty &&
            (
              <div className="analysis-container--discount">
                <p>Quantity Discount</p>
                <p>
                  <FontAwesome name="usd" />
                  {'\u00A0'}-{discount.qty.amount.toFixed(2)}
                </p>
              </div>
            )
          }
          {
              discount.register &&
            (
              <div className="analysis-container--discount">
                <p>New Member Discount</p>
                <p>
                  <FontAwesome name="usd" />
                  {'\u00A0'}-{discount.register.amount.toFixed(2)}
                </p>
              </div>
            )
          }

          <div className="analysis-container--taxes">
            <p>Taxes</p>
            <p><FontAwesome name="usd" />{'\u00A0'}{taxes.toFixed(2)}</p>
          </div>

          <div className="analysis-container--grand-total">
            <h3>Grand Total</h3>
            <h3><FontAwesome name="usd" />{'\u00A0'}{grandTotal.toFixed(2)}</h3>
          </div>

        </div>
        <div className="terms-agreement">
          <Validation.components.Input
            errorClassName="is-invalid-input"
            type="checkbox"
            containerClassName="checkbox"
            name="termsAgreement"
            validations={['required']}
            value={termsAgreement}
            onChange={this.handleOnChange}
          />
          <p>I have read & agree to all <Link to="/terms_and_conditions">
            Terms & Conditions
          </Link></p>
        </div>
      </div>
    );
  }
}

export default GrandTotal;
