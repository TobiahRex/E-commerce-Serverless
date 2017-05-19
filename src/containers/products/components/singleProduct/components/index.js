/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { graphql } from 'react-apollo';
import _ from 'lodash';
import queryProductById from './graphql/queries';
import BreadCrumb from '../../../../../components/breadcrumbs';
// import productActions from '../../../../../redux/products/';
import orderActions from '../../../../../redux/orders/';
import {
  MainTitle,
  ActionBtns,
  SuccessModal,
  BulkSaleModal,
  RegisterModal,
  ProductDisplay,
} from './imports';

const {
  func,
  number,
  bool,
  string,
  shape,
  arrayOf,
  any,
} = PropTypes;

class SingleProduct extends Component {
  static propTypes = {
    loggedIn: bool.isRequired,
    addToMemberCart: func.isRequired,
    addToGuestCart: func.isRequired,
    updateToMemberCart: func.isRequired,
    updateToGuestCart: func.isRequired,
    push: func.isRequired,
    taxRate: number.isRequired,
    productId: string.isRequired,
    cart: shape({
      guest: arrayOf(any),
      member: arrayOf(any),
    }).isRequired,
    data: shape({
      findProductById: shape({
        _id: string,
        product: shape({
          images: arrayOf(shape({
            purpose: string,
            url: string,
          })),
          nicotine_strengths: arrayOf(string),
          price: string,
          qty: number,
          routeTag: string,
          strength: number,
          mainTitle: string,
          title: string,
        }),
      }),
    }).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      showSuccessModal: false,
      showBulkModal: false,
      showRegisterModal: false,
      productId: null,
      product: null,
      qty: 0,
      nicStrength: 0,
      error: false,
      errorQty: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps, this.props)) {
      const {
        data,
        loggedIn,
      } = nextProps;
      this.setState(() => ({
        loggedIn,
        product: data.findProductById.product,
        productId: data.findProductById._id,
      }));
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!_.isEqual(nextState, this.state)) return true;
    return false;
  }

  modalHandler = (e) => {
    let parentEl = e.target.dataset.parent;
    let tagEl = e.target.dataset.tag;
    if (!parentEl) {
      parentEl = e.target.parentNode.dataset.parent;
    }
    if (!tagEl) {
      tagEl = e.target.parentNode.dataset.tag;
    }

    switch (parentEl) {
      case 'success': {
        switch (tagEl) {
          case 'view-cart':
            this.toggleModalAndGo('showSuccessModal', '/cart'); break;
          case 'view-checkout':
            this.toggleModalAndGo('showSuccessModal', '/express_checkout'); break;
          default: this.toggleModal('showSuccessModal');
        }
      } break;
      case 'promotion-bulk': {
        switch (tagEl) {
          case 'view-juices':
            this.toggleModalAndGo('showBulkModal', '/juices'); break;
          default: this.toggleModal('showBulkModal');
        }
      } break;
      case 'promotion-register': {
        switch (tagEl) {
          case 'view-signup':
            this.toggleModalAndGo('showRegisterModal', '/login'); break;
          default: this.toggleModal('showRegisterModal');
        }
      } break;
      default: this.toggleModal();
    }
  }

  toggleModalAndGo = (modal, location) => {
    this.setState(prevState => ({
      [modal]: !prevState[modal],
    }), () => this.props.push(location));
  }

  toggleModal = (modal) => {
    this.setState(prevState => ({ [modal]: !prevState[modal] }));
  }

  qtyHandler = (e) => {
    let buttonEl = e.target.dataset.tag;
    if (!buttonEl) {
      buttonEl = e.target.parentNode.dataset.tag;
    }

    if (buttonEl === 'qty-plus') {
      if (this.state.qty <= 3) {
        this.setState(prevState => ({
          ...prevState,
          qty: (prevState.qty += 1),
        }));
      } else {
        this.setState(prevState => ({
          ...prevState,
          error: true,
        }));
      }
    } else if (buttonEl === 'qty-minus') {
      const { qty } = this.state;
      if (qty >= 1 && qty <= 4) {
        this.setState(prevState => ({
          ...prevState,
          qty: (prevState.qty -= 1),
        }));
      } else {
        this.setState(prevState => ({
          ...prevState,
          error: true,
        }));
      }
    }
  }

  composeGlobalCartInfo = () => {
    const { loggedIn, cart } = this.props;
    const prevCartIds = [];
    let cartCustomerType = '';
    const globalQty = Object.keys(cart)
    .map((key) => {
      if (!cart[key].length) return ([{ qty: 0 }]);
      if (loggedIn && (key === 'member')) {
        cartCustomerType = 'member';
        return cart.member;
      }
      cartCustomerType = 'guest';
      return cart.guest;
    })
    .map(array =>
      array.reduce(a => ({ qty: a.qty, id: a.id })))
    .map(({ qty, id }) => {
      prevCartIds.push(id);
      return qty;
    })
    .reduce((a, b) => a + b);
    return ({
      prevCartIds,
      cartCustomerType,
      globalQty,
    });
  }

  addToCartHandler = () => {
    // 1. If the total items in the cart (redux store) are >= 4, then throw error.
    // 2. If the total items in the cart are <4 than, verify the additional qty, will not exceed 4.  If so, throw an error.
    // 3.  If the items to be added + the total <= 4, then reduce like items, and dispatch.
    const {
      prevCartIds,
      cartCustomerType,
      globalQty,
    } = this.composeGlobalCartInfo();
    const {
      qty,
      nicStrength: strength,
    } = this.state;
    const requestQty = qty;
    const totalRequestQty = requestQty + globalQty;
    const deltaQty = (totalRequestQty > 4) && (totalRequestQty - 4);

    if (globalQty === 4) {
      this.setState({ errorQty: 'You already have the maximum number of items in your cart.' });
    } else if (deltaQty > 0) {
      this.setState({ errorQty: `You have too many items in your cart.  Please remove ${deltaQty} items from your cart to add the requsted number of items.` });
    } else if (!deltaQty) {
      const { productId, cart } = this.props;
      const updatedCartProducts = prevCartIds
      .filter(id => id === productId)
      .map((id) => {
        let newProductObj;
        cart[cartCustomerType]
        .forEach((productObj) => {
          if (productObj.id === id) {
            productObj.qty += requestQty;
            newProductObj = Object.assign({}, productObj);
          }
        });
        return newProductObj;
      });
      if (cartCustomerType === 'member') {
        if (updatedCartProducts.length) {
          this.props.updateToMemberCart({ ...updatedCartProducts });
        } else {
          this.props.addToMemberCart({ qty, strength, ...this.props.data.findProductById });
        }
      } else {
        if (updatedCartProducts.length) {
          this.props.updateToMemberCart({ ...updatedCartProducts });
        }
        this.props.addToGuestCart({ qty, strength, ...this.props.data.findProductById });
      }
    }
  }

  nicotineHandler = (e) => {
    let nicEl = e.target.dataset.tag;
    if (!nicEl) {
      nicEl = e.target.parentNode.dataset.tag;
    }
    this.setState({ nicStrength: Number(nicEl) });
  }


  render() {
    const {
      qty,
      error,
      product,
      nicStrength,
      showBulkModal,
      showSuccessModal,
      showRegisterModal,
    } = this.state;

    const {
      data,
      taxRate,
      loggedIn,
    } = this.props;

    if (this.state.errorQty) throw new Error(this.state.errorQty);

    return (
      <div className="juice-page__main">
        <BreadCrumb
          paths={['Home']}
          classes={['home']}
          destination={['']}
          lastCrumb="Juice Page"
        />

        <MainTitle mainTitle={product ? product.mainTitle : ''} />
        {
          data.loading ? <h1>Loading ...</h1> :
          <ProductDisplay
            qty={qty}
            qtyHandler={this.qtyHandler}
            nicStrength={nicStrength}
            nicotineHandler={this.nicotineHandler}
            addToCartHandler={this.addToCartHandler}
            loggedIn={loggedIn}
            modalHandler={this.modalHandler}
            productObj={product}
            error={error}
          />
        }
        <ActionBtns />

        <SuccessModal
          showModal={showSuccessModal}
          modalHandler={this.modalHandler}
        />

        <BulkSaleModal
          taxRate={taxRate}
          showModal={showBulkModal}
          modalHandler={this.modalHandler}
        />

        <RegisterModal
          taxRate={taxRate}
          loggedIn={loggedIn}
          showModal={showRegisterModal}
          modalHandler={this.modalHandler}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ orders, auth, routing }) => ({
  cart: orders.cart,
  loggedIn: auth.loggedIn || false,
  taxRate: orders.taxRate.totalRate,
  productId: routing.locationBeforeTransitions.query.id,
});
const mapDispatchToProps = dispatch => ({
  push: location => dispatch(push(location)),

  addToGuestCart: productObj =>
  dispatch(orderActions.addToGuestCart(productObj)),

  addToMemberCart: productObj => // convert to GraphQL mutation
  dispatch(orderActions.addToMemberCart(productObj)),

  updateToMemberCart: updatedCartProducts =>  // convert to GraphQL mutation
  dispatch(orderActions.updateToMemberCart(updatedCartProducts)),

  updateToGuestCart: updatedCartProducts =>
  dispatch(orderActions.updateToGuestCart(updatedCartProducts)),
});
const SingleProductWithState = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleProduct);

const SingleProductWithStateAndData = graphql(queryProductById, {
  options: ({ location }) => ({
    variables: {
      id: location.query.id,
    },
  }),
})(SingleProductWithState);
export default SingleProductWithStateAndData;
