import React from 'react';
import ImageGroup from './imageGroup';
import ProductDescription from './productDescription/';

export default function ProductContainer() {
  return (
    <div className="main__parent">
      <ImageGroup />
      <ProductDescription />
    </div>
  );
}
