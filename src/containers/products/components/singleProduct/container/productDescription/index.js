import React from 'react';
import JuiceTitle from './juiceTitle';
import Price from './price';
import Blurb from './blurb';
import Promotion from './promotion';
import Nicotine from './nicotine';
import ProductActions from './productActions';
import SocialMediaBtns from './socialMediaBtns';

export default function ProductDescription() {
  return (
    <div className="main__info--desc">
      <JuiceTitle />
      <Price />
      <Blurb />
      <Promotion />
      <Nicotine />
      <ProductActions />
      <SocialMediaBtns />
    </div>
  );
}
