/* eslint-disable no-lone-blocks, import/first*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { graphql, compose } from 'react-apollo';
import _ from 'lodash';
import orderActions from '../../../../../redux/orders/';
import userActions from '../../../../../redux/user/';
import { FindProductById } from '../../../../../graphQL/queries';
import { AddToMemberCart, EditToMemberCart } from '../../../../../graphQL/mutations';

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
    AddToMemberCart: func.isRequired,
    updateToGuestCart: func.isRequired,
    EditToMemberCart: func.isRequired,
    addToReduxMemberCart: func.isRequired,
    addToReduxProfileCart: func.isRequired,
    updateToReduxMemberCart: func.isRequired,
    // fetchUserProfile: func.isRequired,
    cart: shape({
      guest: arrayOf(any),
      member: arrayOf(any),
    }),
    data: shape({
      FindProductById: shape({
        _id: string,
        product: shape({
          qty: number,
          price: string,
          title: string,
          routeTag: string,
          strength: number,
          mainTitle: string,
          nicotine_strengths: arrayOf(string),
          images: arrayOf(shape({
            purpose: string,
            url: string,
          })),
          quantities: shape({
            available: number,
            in_cart: number,
          }),
        }),
      }),
    }).isRequired,
  }
  static defaultProps = {
    userId: '',
    cart: {
      guest: null,
      member: null,
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      qty: 0,
      error: false,
      added: false,
      product: null,
      errorMsg: '',
      showBulkModal: false,
      chosenStrength: 0,
      showSuccessModal: false,
      showRegisterModal: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps, this.props)) {
      const { loggedIn } = nextProps;
      this.setState(() => ({ loggedIn }));
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!_.isEqual(nextState, this.state) || !_.isEqual(nextProps, this.props)) return true;
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

  toggleModal = (modal) => {
    this.setState(prevState => ({ [modal]: !prevState[modal] }));
  }

  toggleModalAndGo = (modal, location) => {
    this.setState(prevState => ({
      [modal]: !prevState[modal],
    }), () => this.props.push(location));
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
          error: false,
          errorMsg: '',
          qty: (prevState.qty += 1),
        }));
      } else {
        this.setState(prevState => ({
          ...prevState,
          error: true,
          errorMsg: 'Too much',
        }));
      }
    } else if (buttonEl === 'qty-minus') {
      const { qty } = this.state;
      if (qty >= 1 && qty <= 4) {
        this.setState(prevState => ({
          ...prevState,
          error: false,
          errorMsg: '',
          qty: (prevState.qty -= 1),
        }));
      } else {
        this.setState(prevState => ({
          ...prevState,
          error: true,
          errorMsg: 'Not enough',
        }));
      }
    }
  }

  nicotineHandler = (e) => {
    let nicEl = e.target.dataset.tag;
    if (!nicEl) {
      nicEl = e.target.parentNode.dataset.tag;
    }
    return this.setState(() => ({
      error: false,
      errorMsg: '',
      chosenStrength: Number(nicEl),
    }));
  }

  composeGlobalCartInfo = () => {
    const { loggedIn, cart } = this.props;
    const prevCartIds = [];
    let cartCustomerType = '';
    const globalQty = Object.keys(cart)
    .map((key) => {
      if (loggedIn) {
        cartCustomerType = 'member';
      } else {
        cartCustomerType = 'guest';
      }

      if (!cart[key].length) return ([{ qty: 0, id: '' }]);
      if (loggedIn && (key === 'member')) return cart.member;
      return cart.guest;
    })
    .map((cartArray) => {
      const totalCartQty = cartArray.reduce((acc, { qty, id }) => {
        prevCartIds.push(id);
        return (acc + qty);
      }, 0);
      return totalCartQty;
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
    if (this.state.qty === 0) {
      this.setState(() => ({
        error: true,
        errorMsg: 'You must choose a quantity of at least 1.',
      }));
    } else if (!this.state.chosenStrength) {
      this.setState(() => ({
        error: true,
        errorMsg: 'No strength',
      }));
    } else {
      const {
        prevCartIds,
        cartCustomerType,
        globalQty,
      } = this.composeGlobalCartInfo();
      const { qty, chosenStrength: strength } = this.state;
      const requestQty = qty;
      const totalRequestQty = requestQty + globalQty;
      const deltaQty = (totalRequestQty > 4) && (totalRequestQty - 4);
      if (globalQty === 4) {
        this.setState({
          qty: 0,
          error: true,
          errorMsg: 'Max items',
          chosenStrength: 0,
        });
      } else if (deltaQty > 0) {
        this.setState(() => ({
          qty: 0,
          error: true,
          errorMsg: `You have too many items in your cart.  Please remove ${deltaQty} items from your cart to add the requested quantity.`,
        }));
      } else if (!deltaQty) {
        const { productId, cart, data, userId } = this.props;

        const updatedCartProducts = cart[cartCustomerType] && cart[cartCustomerType]
        .map((productObj) => {
          if (productObj.id === productId) {
            productObj.qty += requestQty;
            return productObj;
          }
          return productObj;
        });
        const currentProduct = {
          qty,
          userId,
          strength,
          id: productId,
          ...data.FindProductById.product,
        };

        if (!prevCartIds.includes(productId) && updatedCartProducts.length) {
          updatedCartProducts.push(currentProduct);
        }

        if (cartCustomerType === 'member') {
          if (updatedCartProducts.length) {
            this.setState(() => ({
              qty: 0,
              added: true,
              error: false,
              errorMsg: '',
              chosenStrength: 0,
            }), () => {
              this.props.EditToMemberCart(updatedCartProducts)
              .then(({ data: { EditToMemberCart: updatedUser } }) => {
                this.props.saveProfile(updatedUser);
              })
            });
          } else {
            this.setState(() => ({
              qty: 0,
              added: true,
              error: false,
              errorMsg: '',
              chosenStrength: 0,
            }), () => {
              this.props.AddToMemberCart({
                variables: {
                  qty,
                  userId,
                  strength,
                  product: productId,
                },
              })
              .then(({ data: { AddToMemberCart: { shopping } } }) => {
                this.props.addToReduxProfileCart(shopping.cart);
                this.props.addToReduxMemberCart(currentProduct);
              });
            });
          }
        } else if (cartCustomerType === 'guest') {
          if (updatedCartProducts.length) {
            this.setState(() => ({
              qty: 0,
              added: true,
              error: false,
              errorMsg: '',
              chosenStrength: 0,
            }), () => {
              this.props.updateToGuestCart(updatedCartProducts);
            });
          } else {
            this.setState(() => ({
              qty: 0,
              added: true,
              error: false,
              errorMsg: '',
              chosenStrength: 0,
            }), () => {
              this.props.addToGuestCart(currentProduct);
            });
          }
        }
      }
    }
  }

  componentDidUpdate() {
    if (this.state.added) {
      setTimeout(() => {
        this.setState({ added: false });
      }, 5000);
    }
  }

  render() {
    const {
      qty,
      error,
      added,
      errorMsg,
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
    return (
      <div className="juice-page__main">
        <BreadCrumb
          paths={['Home', 'Juices']}
          classes={['home', 'home']}
          destination={['', 'juices']}
          lastCrumb={data.FindProductById ? data.FindProductById.product.title : 'Juice Page'}
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
            added={added}
            error={error}
            errorMsg={errorMsg}
            loggedIn={loggedIn}
            qtyHandler={this.qtyHandler}
            chosenStrength={chosenStrength}
            modalHandler={this.modalHandler}
            nicotineHandler={this.nicotineHandler}
            addToCartHandler={this.addToCartHandler}
            productObj={data.FindProductById ? data.FindProductById.product : null}
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
const SingleProductWithState = connect(
({ orders, auth, routing, user }) => ({
  cart: orders.cart,
  userId: user.profile ? user.profile._id : '',
  loggedIn: auth.loggedIn || false,
  taxRate: orders.taxRate.totalRate,
  productId: routing.locationBeforeTransitions.query.id,
}),
dispatch => ({
  push: location => dispatch(push(location)),

  saveProfile: updatedUser => dispatch(userActions.saveProfile(updatedUser)),

  addToGuestCart: productObj =>
  dispatch(orderActions.addToGuestCart(productObj)),

  updateToGuestCart: updatedCartProducts =>
  dispatch(orderActions.updateToGuestCart(updatedCartProducts)),

  addToReduxProfileCart: cart => dispatch(userActions.addToReduxProfileCart(cart)),

  addToReduxMemberCart: products => dispatch(orderActions.addToReduxMemberCart(products)),

  updateToReduxMemberCart: products => dispatch(orderActions.updateToReduxMemberCart(products)),
}),
)(SingleProduct);

const SingleProductWithStateAndData = compose(
  graphql(FindProductById, {
    options: ({ location }) => ({
      variables: {
        id: location.query.id,
      },
    }),
  }),
  graphql(AddToMemberCart, { name: 'AddToMemberCart' }),
  graphql(EditToMemberCart, { name: 'EditToMemberCart' }),
)(SingleProductWithState);
export default SingleProductWithStateAndData;
