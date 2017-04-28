import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageGroup,
  ProductSection,
} from './imports';

function SingleProductContainer({ productObj, loggedIn, modalHandler }) {
  return (
    <div className="main__parent">
      <ImageGroup
        imageUrl={productObj.imageUrl}
        modalHandler={modalHandler}
      />

      <ProductSection
        modalHandler={modalHandler}
        loggedIn={loggedIn}
      />
    </div>
  );
}
const { func, bool, objectOf, any } = PropTypes;
SingleProductContainer.propTypes = {
  loggedIn: bool.isRequired,
  modalHandler: func.isRequired,
  productObj: objectOf(any).isRequired,
};
export default SingleProductContainer;
