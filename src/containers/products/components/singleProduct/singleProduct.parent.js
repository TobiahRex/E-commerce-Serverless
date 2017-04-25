import React from 'react';
import ImageGroup from './parent/imageGroup';
import ProductDescription from './parent/productDescription/';

export default function SingleProductParent() {
  return (
    <div className="main__parent">
      <ImageGroup />
      <ProductDescription />
    </div>
  );
}
