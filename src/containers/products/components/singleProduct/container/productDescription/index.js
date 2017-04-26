/* estlint-disable no-return-assign */
import React, { Component } from 'react';
import JuiceTitle from './juiceTitle';
import Price from './price';
import Blurb from './blurb';
import Promotion from './promotion';
import Nicotine from './nicotine';
import ProductActions from './productActions';
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
      this.setState((prevState) => ({
        ...prevState,
        error: true,
      }));
    }
  }

  render() {
    const { modalHandler, loggedIn } = this.props;
    return (
      <div className="main__info--desc">
        <JuiceTitle />
        <Price />
        <Blurb />
        <Promotion
          modalHandler={modalHandler}
          loggedIn={loggedIn}
        />
        <Nicotine />
        <ProductActions />
        <SocialMediaBtns />
      </div>
    );
  }
}
export default ProductDescription;
