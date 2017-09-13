import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function NavbarProductCardActions({
  slug,
  productId,
  editCartItem,
  deleteFromCart,
}) {
  return (
    <div className="products-list-card-actions">
      <div href="" className="products-list-card-actions-edit sweep-right">
        <button
          data-id={productId}
          data-route={slug}
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
NavbarProductCardActions.propTypes = {
  slug: string,
  productId: string,
  editCartItem: func.isRequired,
  deleteFromCart: func.isRequired,
};
NavbarProductCardActions.defaultProps = {
  slug: '',
  productId: '',
};
export default NavbarProductCardActions;
