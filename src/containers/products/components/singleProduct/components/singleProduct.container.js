import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageGroup,
  ProductSection,
} from './imports';

function SingleProductContainer({ modalHandler, loggedIn }) {
  return (
    <div className="main__parent">
      <ImageGroup modalHandler={modalHandler} />
      <ProductSection
        modalHandler={modalHandler}
        loggedIn={loggedIn}
      />
    </div>
  );
}
const { func, bool } = PropTypes;
SingleProductContainer.propTypes = {
  loggedIn: bool.isRequired,
  modalHandler: func.isRequired,
};
export default SingleProductContainer;
