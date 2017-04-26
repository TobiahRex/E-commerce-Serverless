/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import BreadCrumb from '../../../../components/breadcrumbs';
import Title from './title';
import Container from './container/';
import ActionBtns from './actionBtns';
import SuccessModal from './successModal';
import BulkSaleModal from './promotionModal.bulk';
import RegisterModal from './promotionModal.register';


const { func, number } = React.PropTypes;

class SingleProduct extends Component {
  static propTypes = {
    saveProductToCart: func.isRequired,
    push: func.isRequired,
    taxRate: number.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      showSuccessModal: false,
      showBulkModal: false,
      showRegisterModal: false,
    };
  }

  toggleModal = (e) => {
    let parentEl = e.target.dataset.parent;
    if (!parentEl) {
      parentEl = e.target.parentNode;
    }

    switch (parentEl.dataset.parent) {
      case 'success': {
        switch (parentEl.dataset.tag) {
          case 'view-cart': this.modalHandler('/cart'); break;
          case 'view-checkout': this.modalHandler('/express_checkout'); break;
          default: this.closeModal();
        }
      } break;
      case 'promotion-bulk': {
        switch (parentEl.dataset.tag) {
          case 'view-juices': this.modalHandler('/juices');
            break;
          default: this.closeModal();
        }
      } break;
      case 'promotion-register': {
        switch (parentEl.dataset.tag) {
          case 'view-checkout': this.modalHandler('/express_checkout');
            break;
          case 'view-cart': this.modalHandler('/cart');
            break;
          default: this.closeModal();
        }
      } break;
      default: this.closeModal();
    }
  }

  modalHandler = (location) => {
    this.setState(prevState => ({
      showSuccessModal: !prevState.showSuccessModal,
    }), () => this.props.push(location));
  }

  closeModal = () => this.setState(prevState => ({ showSuccessModal: !prevState.showSuccessModal }))

  render() {
    return (
      <div className="juice-page__main">
        <BreadCrumb
          paths={['Home']}
          classes={['home']}
          destination={['']}
          lastCrumb="Juice Page"
        />
        <Title />
        <Container toggleModal={this.toggleModal} />
        <ActionBtns />
        <SuccessModal
          showModal={this.state.showSuccessModal}
          toggleModal={this.toggleModal}
        />
        <BulkSaleModal
          taxRate={this.props.taxRate}
          showModal={this.state.showBulkModal}
          toggleModal={this.toggleModal}
        />
        <RegisterModal
          showModal={this.state.showRegisterModal}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ orders }) => ({
  taxRate: orders.taxRate.totalRate,
});
const mapDispatchToProps = dispatch => ({
  saveProductToCart: () => console.log('savingProductToCart', dispatch),
  push: location => dispatch(push(location)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
