/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import _ from 'lodash';
import BreadCrumb from '../../../../../components/breadcrumbs';
import productActions from '../../../../../redux/products/';
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
    saveProductToCart: func.isRequired,
    push: func.isRequired,
    taxRate: number.isRequired,
    fetchProductById: func.isRequired,
    productId: string.isRequired,
    activeViewProduct: shape({
      id: string,
      images: arrayOf(shape({
        card: string,
        large: string,
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
        card: '',
        large: '',
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
    };
  }

  componentWillMount() {
    console.log('Single Product will mount');
    const { fetchProductById, productId } = this.props;
    fetchProductById(productId);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps: ', nextProps);
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

  render() {
    const { activeViewProduct: productObj } = this.state;
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
          productObj={productObj}
          loggedIn={this.props.loggedIn}
          modalHandler={this.modalHandler}
        />
        <ActionBtns />
        <SuccessModal
          showModal={this.state.showSuccessModal}
          modalHandler={this.modalHandler}
        />
        <BulkSaleModal
          taxRate={this.props.taxRate}
          showModal={this.state.showBulkModal}
          modalHandler={this.modalHandler}
        />
        <RegisterModal
          taxRate={this.props.taxRate}
          loggedIn={this.props.loggedIn}
          showModal={this.state.showRegisterModal}
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
  saveProductToCart: () => console.log('savingProductToCart', dispatch),
  fetchProductById: id => dispatch(productActions.fetchProductById(id)),
  push: location => dispatch(push(location)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
