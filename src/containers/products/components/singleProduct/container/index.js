/* eslint-disable no-lone-blocks, import/first*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import _ from 'lodash';
import orderActions from '../../../../../redux/orders/';
import FindProductById from '../graphql/queries';
import { AddToMemberCart, UpdateToMemberCart } from '../graphql/mutations';

import {
  MainTitle,
  BreadCrumb,
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
    push: func.isRequired,
    userId: string,
    taxRate: number.isRequired,
    productId: string.isRequired,
    loggedIn: bool.isRequired,
    addToGuestCart: func.isRequired,
    addToMemberCart: func.isRequired,
    updateToGuestCart: func.isRequired,
    updateToMemberCart: func.isRequired,
    cart: shape({
      guest: arrayOf(any),
      member: arrayOf(any),
    }).isRequired,
    data: shape({
      FindProductById: shape({
        _id: string,
        product: shape({
          images: arrayOf(shape({
            purpose: string,
            url: string,
          })),
          quantities: shape({
            available: number,
            in_cart: number,
          }),
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
    mutate: func.isRequired,
  }
  static defaultProps = {
    userId: '',
  }
  constructor(props) {
    super(props);
    this.state = {
      qty: 0,
      error: false,
      product: null,
      errorQty: '',
      productId: null,
      showBulkModal: false,
      chosenStrength: 0,
      showSuccessModal: false,
      showRegisterModal: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps, this.props)) {
      const {
        data,
        loggedIn,
      } = nextProps;

      console.log('%cdata', 'background:lime;', data);
      this.setState(() => ({
        loggedIn,
        product: data ? data.FindProductById.product : null,
        productId: data ? data.FindProductById._id : null,
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
      chosenStrength: strength,
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
          this.props.updateToMemberCart({
            qty,
            strength,
            userId: this.props.userId,
            ...updatedCartProducts,
          });
        } else {
          this.props.addToMemberCart({
            userId: this.props.userId,
            qty,
            strength,
            ...this.state.product,
          });
        }
      } else {
        if (updatedCartProducts.length) {
          this.props.updateToMemberCart({ ...updatedCartProducts });
        }
        this.props.addToGuestCart({ qty, strength, ...this.state.product });
      }
    }
  }

  nicotineHandler = (e) => {
    let nicEl = e.target.dataset.tag;
    if (!nicEl) {
      nicEl = e.target.parentNode.dataset.tag;
    }
    this.setState({ chosenStrength: Number(nicEl) });
  }


  render() {
    const {
      qty,
      error,
      // product,
      showBulkModal,
      chosenStrength,
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
        {
          data.FindProductById ?
            <MainTitle
              vendor={data.FindProductById.product.vendor}
              mainTitle={data.FindProductById.product.mainTitle}
            /> : ''
        }
        {
          data.loading ? <h1>Loading ...</h1> :
          <ProductDisplay
            qty={qty}
            error={error}
            loggedIn={loggedIn}
            productObj={data.FindProductById.product}
            qtyHandler={this.qtyHandler}
            chosenStrength={chosenStrength}
            modalHandler={this.modalHandler}
            nicotineHandler={this.nicotineHandler}
            addToCartHandler={this.addToCartHandler}
          />
        }
        <ActionBtns />

        <SuccessModal
          qty={qty}
          productTitle={data.FindProductById ? data.FindProductById.product.title : ''}
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
const mapStateToProps = ({ orders, auth, routing, user: profile }) => ({
  cart: orders.cart,
  loggedIn: auth.loggedIn || false,
  taxRate: orders.taxRate.totalRate,
  productId: routing.locationBeforeTransitions.query.id,
  userId: profile ? profile.id : '',
});
const mapDispatchToProps = dispatch => ({
  push: location => dispatch(push(location)),

  addToGuestCart: productObj =>
  dispatch(orderActions.addToGuestCart(productObj)),

  updateToGuestCart: updatedCartProducts =>
  dispatch(orderActions.updateToGuestCart(updatedCartProducts)),

  // addToMemberCart: productObj => // convert to GraphQL mutation
  // dispatch(orderActions.addToMemberCart(productObj)),

  // updateToMemberCart: updatedCartProducts =>  // convert to GraphQL mutation
  // dispatch(orderActions.updateToMemberCart(updatedCartProducts)),
});
const SingleProductWithState = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleProduct);

const SingleProductWithStateAndData = compose(
  graphql(FindProductById, {
    options: ({ location }) => ({
      variables: {
        id: location.query.id,
      },
    }),
  }),
  graphql(AddToMemberCart, { name: 'addToMemberCart' }),
  graphql(UpdateToMemberCart, { name: 'updateToMemberCart' }),
)(SingleProductWithState);
export default SingleProductWithStateAndData;
