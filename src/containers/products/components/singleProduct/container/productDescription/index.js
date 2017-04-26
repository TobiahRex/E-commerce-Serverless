import React from 'react';
import JuiceTitle from './juiceTitle';
import Price from './price';
import Blurb from './blurb';
import Promotion from './promotion';
import Nicotine from './nicotine';
import ProductActions from './productActions';
import SocialMediaBtns from './socialMediaBtns';

function ProductDescription({ modalHandler, loggedIn }) {
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
const { func, bool } = React.PropTypes;
ProductDescription.propTypes = {
  modalHandler: func.isRequired,
  loggedIn: bool.isRequired,
};
export default ProductDescription;
