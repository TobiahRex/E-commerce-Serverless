import React from 'react';
import PropTypes from 'prop-types';

const { objectOf, any, string } = PropTypes;

class CheckoutGrid extends React.Component {
  static propTypes = {
    children: objectOf(any).isRequired,
    ccRenderKey: string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      ccRenderKey: props.ccRenderKey,
    };
  }

  componentDidMount() {
    console.warn('EXPRESS CHECKOUT - Mounted');
    paymentForm = SqrPaymentForm(this.state.ccRenderKey, this.handleNonceResponse);
    paymentForm.build();
  }

  componentWillUnmount() {
    console.warn('EXPRESS CHECKOUT - Will unmount');
  }

  componentWillReceiveProps(nextProps) {
    const nextPropsCopy = Object.assign({}, nextProps);
    delete nextPropsCopy.handleOnChange;
    delete nextPropsCopy.toggleModal;
    if (!_.isEqual(nextProps, this.props)) this.setState({ ...nextPropsCopy });
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
    <div className="checkout__grid">
      {this.props.children}
    </div>
    );
  }
}
export default CheckoutGrid;
