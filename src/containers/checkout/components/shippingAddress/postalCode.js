import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { connect } from 'react-redux';
import { orderActions } from './redux.imports';

const { func, string } = PropTypes;

class PostalCode extends React.PureComponent {
  static propTypes = {
    handleOnChange: func.isRequired,
    shippingPostalCode: string,
    SgValidatePostal: func.isRequired,
  }

  static defaultProps = {
    shippingPostalCode: '',
  }

  constructor(props) {
    super(props);

    this.state = {
      shippingPostalCode: props.shippingPostalCode,
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
      <div className="input__row">
        <div className="input__row--postal-code">
          <p>Postal Code <span className="required">*</span></p>
          <Validation.components.Input
            errorClassName="is-invalid-input"
            type="text"
            containerClassName=""
            name="shippingPostalCode"
            validations={['required', 'japan-postal']}
            onChange={this.handleOnChange}
            onBlur={this.props.SgValidatePostal}
            value={this.props.shippingPostalCode}
          />
        </div>
      </div>
    );
  }
}

const PostalCodeWithRedux = connect(null, dispatch => ({
  SgValidatePostal: postalCode => dispatch(orderActions.validatePostal(postalCode)),
}))(PostalCode);

export default PostalCodeWithRedux;
