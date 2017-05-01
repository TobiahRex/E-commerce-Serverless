import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function NavbarCartProductsCardActions({
  routeTag,
  id,
  editCartItem,
  deleteFromCart,
}) {
  return (
    <div className="products-list-card-actions">
      <div href="" className="products-list-card-actions-edit sweep-right">
        <button
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
        data-id={id}
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
  id: string,
  editCartItem: func.isRequired,
  deleteFromCart: func.isRequired,
};
NavbarCartProductsCardActions.defaultProps = {
  routeTag: '',
  id: '',
};
export default NavbarCartProductsCardActions;
