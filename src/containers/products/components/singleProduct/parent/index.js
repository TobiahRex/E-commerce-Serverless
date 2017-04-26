import React from 'react';
import ImageGroup from './imageGroup';
import ProductDescription from './productDescription/';

function Container({ modalHandler, loggedIn }) {
  return (
    <div className="main__parent">
      <ImageGroup modalHandler={modalHandler} />
      <ProductDescription
        modalHandler={modalHandler}
        loggedIn={loggedIn}
      />
    </div>
  );
}
const { func, bool } = React.PropTypes;
Container.propTypes = {
  loggedIn: bool.isRequired,
  modalHandler: func.isRequired,
};
export default Container;
