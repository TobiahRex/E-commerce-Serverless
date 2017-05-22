import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function NavbarCartProductsCardActions({
  routeTag,
  productId,
  editCartItem,
  deleteFromCart,
}) {
  return (
    <div className="products-list-card-actions">
      <div href="" className="products-list-card-actions-edit sweep-right">
        <button
          data-id={productId}
          data-route={routeTag}
          onClick={editCartItem}
          className="products-list-card-actions-delete sweep-right"
        >
          <FontAwesome
            className="products-list-card-actions-edit-icon"
            name="pencil"
          />
        </button>
      </div>
      <button
        data-id={productId}
        onClick={deleteFromCart}
        className="products-list-card-actions-delete sweep-right"
      >
        <FontAwesome
          className="products-list-card-actions-delete-icon"
          name="trash-o"
        />
      </button>
    </div>
  );
}
const { string, func } = PropTypes;
NavbarCartProductsCardActions.propTypes = {
  routeTag: string,
  productId: string,
  editCartItem: func.isRequired,
  deleteFromCart: func.isRequired,
};
NavbarCartProductsCardActions.defaultProps = {
  routeTag: '',
  productId: '',
};
export default NavbarCartProductsCardActions;
