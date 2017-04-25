import React from 'react';
import ImageGroup from './imageGroup';
import ProductDescription from './productDescription/';

const { func } = React.PropTypes;

function Container({ toggleModal }) {
  return (
    <div className="main__parent">
      <ImageGroup toggleModal={toggleModal} />
      <ProductDescription />
    </div>
  );
}
Container.propTypes = {
  toggleModal: func.isRequired,
};
export default Container;
