import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import Validation from 'react-validation';

const { bool, func } = PropTypes;

class GrandTotal extends React.PureComponent {
  static propTypes = {
    handleOnChange: func.isRequired,
    termsAgreement: bool.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      termsAgreement: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    const nextPropsCopy = Object.assign({}, nextProps);
    delete nextPropsCopy.handleOnChange;
    if (!_.isEqual(nextProps, this.props)) this.setState({ ...nextPropsCopy });
  }

  handleOnChange = (e) => {
    e.target.value = !this.state.termsAgreement;
    this.props.handleOnChange(e);
  };

  render() {
    return (
      <div className="checkout__grand-total">
        <div className="title">
          <h3>Total</h3>
        </div>

        <div className="analysis-container">
          <div className="analysis-container--subtotal">
            <p>Subtotal</p>
            <p><FontAwesome name="usd" />{'\u00A0'}90.00</p>
          </div>
          <div className="analysis-container--shipping">
            <p>Shipping & Handling</p>
            <p><i>Free</i></p>
          </div>
          <div className="analysis-container--discount">
            <p>New Member Discount</p>
            <p><FontAwesome name="usd" />{'\u00A0'}-9.00</p>
          </div>
          <div className="analysis-container--taxes">
            <p>Taxes</p>
            <p><FontAwesome name="usd" />{'\u00A0'}8.10</p>
          </div>
          <div className="analysis-container--grand-total">
            <h3>Grand Total</h3>
            <h3><FontAwesome name="usd" />{'\u00A0'}8.10</h3>
          </div>
        </div>
        <div className="terms-agreement">
          <Validation.components.Input
            errorClassName="is-invalid-input"
            type="checkbox"
            containerClassName="checkbox"
            name="termsAgreement"
            validations={['boolRequired']}
            value={this.state.termsAgreement}
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
