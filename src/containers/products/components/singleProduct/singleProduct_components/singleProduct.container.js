import React from 'react';
import {
  ImageGroup,
  ProductSection,
} from './';

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
const { func, bool } = React.PropTypes;
SingleProductContainer.propTypes = {
  loggedIn: bool.isRequired,
  modalHandler: func.isRequired,
};
export default SingleProductContainer;
