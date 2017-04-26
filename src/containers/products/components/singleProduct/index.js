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


const { func, number, bool } = React.PropTypes;

class SingleProduct extends Component {
  static propTypes = {
    loggedIn: bool.isRequired,
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
          case 'view-checkout':
            this.toggleModalAndGo('showRegisterModal', '/express_checkout'); break;
          case 'view-cart':
            this.toggleModalAndGo('showRegisterModal', '/cart'); break;
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
    return (
      <div className="juice-page__main">
        <BreadCrumb
          paths={['Home']}
          classes={['home']}
          destination={['']}
          lastCrumb="Juice Page"
        />
        <Title />
        <Container
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
const mapStateToProps = ({ orders, auth }) => ({
  loggedIn: auth.loggedIn || false,
  taxRate: orders.taxRate.totalRate,
});
const mapDispatchToProps = dispatch => ({
  saveProductToCart: () => console.log('savingProductToCart', dispatch),
  push: location => dispatch(push(location)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
