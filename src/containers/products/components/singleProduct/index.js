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


const { func } = React.PropTypes;

class SingleProduct extends Component {
  static propTypes = {
    saveProductToCart: func.isRequired,
    push: func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  toggleModal = (e) => {
    switch (e.target.dataset.parent) {
      case 'success': {
        switch (e.target.dataset.tag) {
          case 'view-cart': this.modalHandler('/cart'); break;
          case 'view-checkout': this.modalHandler('/express_checkout'); break;
          default: {
            this.setState(prevState => ({
              showModal: !prevState.showModal,
            }));
          }
        }
      } break;
      default: {
        this.setState(prevState => ({ showModal: !prevState.showModal }));
      }
    }
  }

  modalHandler = (location) => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }), () => this.props.push(location));
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
        <Container toggleModal={this.toggleModal} />
        <ActionBtns />
        <SuccessModal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
        />
        <BulkSaleModal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
        />
        <RegisterModal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  saveProductToCart: () => console.log('savingProductToCart', dispatch),
  push: location => dispatch(push(location)),
});
export default connect(null, mapDispatchToProps)(SingleProduct);
