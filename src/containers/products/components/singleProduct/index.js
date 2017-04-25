import React from 'react';
import BreadCrumb from '../../../../components/breadcrumbs';
import SingleProductTitle from './singleProduct.title';
import SingleProductParent from './singleProduct.parent';
import SingleProductActionBtns from './singleProduct.actionBtns';
import SingleProductModal from './singleProduct.modal';

export default function SingleProduct() {
  return (
    <div className="juice-page__main">
      <BreadCrumb
        paths={['Home']}
        classes={['home']}
        destination={['']}
        lastCrumb="Juice Page"
      />
      <SingleProductTitle />
      <SingleProductParent />
      <SingleProductActionBtns />
      <SingleProductModal />
    </div>
  );
}
