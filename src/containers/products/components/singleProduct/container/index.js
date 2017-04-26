import React from 'react';
import ImageGroup from './imageGroup';
import ProductDescription from './productDescription/';

const { func } = React.PropTypes;

function Container({ modalHandler }) {
  return (
    <div className="main__parent">
      <ImageGroup modalHandler={modalHandler} />
      <ProductDescription modalHandler={modalHandler} />
    </div>
  );
}
Container.propTypes = {
  modalHandler: func.isRequired,
};
export default Container;
