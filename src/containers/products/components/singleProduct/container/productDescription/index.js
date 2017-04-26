/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import JuiceTitle from './juiceTitle';
import Price from './price';
import Blurb from './blurb';
import Promotion from './promotion';
import Nicotine from './nicotine';
import ProductActions from './productActionBtns';
import SocialMediaBtns from './socialMediaBtns';

const { func, bool } = React.PropTypes;

class ProductDescription extends Component {
  static propTypes = {
    modalHandler: func.isRequired,
    loggedIn: bool.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      qty: 0,
      productId: '',
      nicotineStrength: 0,
      error: false,
    };
  }

  incrementQty = () => {
    if (this.state.qty <= 3) {
      this.setState(prevState => ({
        ...prevState,
        qty: prevState.qty += 1,
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        error: true,
      }));
    }
  }

  addToCart = () => {
    const {
      qty
      productId: id,
      nicotineStrength: strength,
    } = this.state;

    if (this.props.loggedIn) {
      this.props.addToMemberCart({
        id,
        qty,
        strength,
      });
    } else {
      this.props.addToGuestCart({
        id,
        qty,
        strength,
      })
    }
  }

  render() {
    return (
      <div className="main__info--desc">
        <JuiceTitle />
        <Price />
        <Blurb />
        <Promotion
          modalHandler={this.props.modalHandler}
          loggedIn={this.props.loggedIn}
        />
        <Nicotine />
        <ProductActions
          addToCart={this.addToCart}
          incrementQty={this.incrementQty}
          error={this.state.error}
        />
        <SocialMediaBtns />
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.loggedIn,
})
export default connect(mapStateToProps, null)(ProductDescription);
