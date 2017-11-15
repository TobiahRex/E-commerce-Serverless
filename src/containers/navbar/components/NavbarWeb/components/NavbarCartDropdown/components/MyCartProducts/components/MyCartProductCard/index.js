import React from 'react';
import PropTypes from 'prop-types';

function MyCartProductCard({ children, id }) {
  return (
    <div className="product-stage__product-list-card" key={id}>
      {children}
    </div>
  );
}
const { string, objectOf, any } = PropTypes;
MyCartProductCard.propTypes = {
  id: string.isRequired,
  children: objectOf(any).isRequired,
};
export default MyCartProductCard;
