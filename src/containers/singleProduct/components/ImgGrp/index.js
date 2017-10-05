import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ImageGroup({ modalHandler, imageUrl }) {
  return (
    <div className="main__info--image">
      <img
        src={imageUrl}
        className="image__src"
        alt="Switch Juice"
      />
      <button
        data-parent="promotion-bulk"
        data-tag=""
        className="image__promotion sweep-right-red"
        onClick={modalHandler}
      >
        <p>
          <IntlMsg id="product.single.image.promotion1" />
        </p>
        <br />
        <p>
          <IntlMsg id="product.single.image.promotion2" />
        </p>
      </button>
    </div>
  );
}
const { string, func } = PropTypes;
ImageGroup.propTypes = {
  modalHandler: func.isRequired,
  imageUrl: string.isRequired,
};
export default ImageGroup;
