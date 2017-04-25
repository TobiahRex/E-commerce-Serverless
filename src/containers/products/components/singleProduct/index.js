import React, { Component } from 'react';
import { connect } from 'react-redux';

import BreadCrumb from '../../../../components/breadcrumbs';
import Title from './title';
import Container from './container/';
import ActionBtns from './actionBtns';
import Modal from './modal';

class SingleProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
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
        <Modal showModal={this.state.showModal} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  saveProductToCart: () => console.log('savingProductToCart', dispatch),
});
export default connect(null, mapDispatchToProps)(SingleProduct);
