/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import _ from 'lodash';
import BreadCrumb from '../../../../../components/breadcrumbs';
import productActions from '../../../../../redux/products/';
import orderActions from '../../../../../redux/orders/';
import {
  BulkSaleModal,
  MainTitle,
  SingleProductContainer,
  ActionBtns,
  SuccessModal,
  RegisterModal,
} from './imports';

const { func, number, bool, string, shape, arrayOf } = React.PropTypes;

class SingleProduct extends Component {
  static propTypes = {
    loggedIn: bool.isRequired,
    addToMemberCart: func.isRequired,
    addToGuestCart: func.isRequired,
    push: func.isRequired,
    taxRate: number.isRequired,
    fetchProductById: func.isRequired,
    productId: string.isRequired,
    activeViewProduct: shape({
      id: string,
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
  }
  static defaultProps = {
    activeViewProduct: {
      id: '',
      images: [{
        purpose: '',
        url: '',
      }],
      nicotine_strengths: [''],
      price: '',
      qty: 0,
      routeTag: '',
      strength: 0,
      mainTitle: '',
      title: '',
    },
  }
  constructor(props) {
    super(props);

    this.state = {
      showSuccessModal: false,
      showBulkModal: false,
      showRegisterModal: false,
      product: null,
      activeViewProduct: props.activeViewProduct,
      qty: 0,
      nicStrength: 0,
      error: false,
    };
  }

  componentWillMount() {
    const { fetchProductById, productId } = this.props;
    fetchProductById(productId);
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps, this.props)) {
      this.setState({ ...nextProps });
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

  addToCartHandler = () => {
    // 1. If the total items in the cart (redux store) are >= 4, then throw error.
    // 2. If the total items in the cart are <4 than, verify the additional qty, will not exceed 4.  If so, throw an error.
    // 3.  If the items to be added + the total <= 4, then reduce like items, and dispatch.
    const {
      qty,
      nicStrength: strength,
    } = this.state;

    if (this.props.loggedIn) {
      this.props.addToMemberCart({
        qty,
        strength,
        ...this.props.activeViewProduct,
      });
    } else {
      this.props.addToGuestCart({
        qty,
        strength,
        ...this.props.activeViewProduct,
      });
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
      nicStrength,
      error,
      activeViewProduct: productObj,
      showSuccessModal,
      showBulkModal,
      showRegisterModal,
    } = this.state;
    const {
      taxRate,
      loggedIn,
    } = this.props;
    return (
      <div className="juice-page__main">
        <BreadCrumb
          paths={['Home']}
          classes={['home']}
          destination={['']}
          lastCrumb="Juice Page"
        />

        <MainTitle mainTitle={productObj.mainTitle} />
        <SingleProductContainer
          qty={qty}
          qtyHandler={this.qtyHandler}
          nicStrength={nicStrength}
          nicotineHandler={this.nicotineHandler}
          addToCartHandler={this.addToCartHandler}
          loggedIn={loggedIn}
          modalHandler={this.modalHandler}
          productObj={productObj}
          error={error}
        />

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
const mapStateToProps = ({ orders, auth, routing, products }) => ({
  loggedIn: auth.loggedIn || false,
  taxRate: orders.taxRate.totalRate,
  productId: routing.locationBeforeTransitions.query.id,
  activeViewProduct: products.activeViewProduct,
});
const mapDispatchToProps = dispatch => ({
  push: location =>
    dispatch(push(location)),

  fetchProductById: id =>
    dispatch(productActions.fetchProductById(id)),

  addToGuestCart: productObj =>
    dispatch(orderActions.addToGuestCart(productObj)),

  addToMemberCart: productObj =>
    dispatch(orderActions.addToMemberCart(productObj)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
