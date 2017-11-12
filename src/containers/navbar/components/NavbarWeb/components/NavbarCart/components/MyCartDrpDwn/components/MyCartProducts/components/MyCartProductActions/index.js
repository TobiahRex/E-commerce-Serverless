import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function MyCartProductActions({
  slug,
  productId,
  editCartItem,
  deleteFromCart,
}) {
  return (
    // <div className="products-list-card-actions">
    //   <div href="" className="products-list-card-actions-edit sweep-right">
    //     <button
    //       data-id={productId}
    //       data-route={slug}
    //       onClick={editCartItem}
    //       className="products-list-card-actions-delete sweep-right"
    //     >
    //       <FontAwesome
    //         className="products-list-card-actions-edit-icon"
    //         name="pencil"
    //       />
    //     </button>
    //   </div>
    //   <button
    //     data-id={productId}
    //     onClick={deleteFromCart}
    //     className="products-list-card-actions-delete sweep-right"
    //   >
    //     <FontAwesome
    //       className="products-list-card-actions-delete-icon"
    //       name="trash-o"
    //     />
    //   </button>
    // </div>

    <div className="product-list-card__card-btn">
      <button
        className="card-btn__nav-cart-edit"
        data-id={productId}
        data-route={slug}
        onClick={editCartItem}
      >
        <p className="nav-cart-edit__fa-text">
          <FontAwesome
            // className="products-list-card-actions-edit-icon"
            name="pencil"
          />
        </p>
      </button>
      <button
        className="card-btn__nav-cart-delete"
        data-id={productId}
        onClick={deleteFromCart}
      >
        <p className="nav-cart-delete__fa-text">
          <FontAwesome
            // className="products-list-card-actions-delete-icon"
            name="trash-o"
          />
        </p>
      </button>
    </div>
  );
}
const { string, func } = PropTypes;
MyCartProductActions.propTypes = {
  slug: string,
  productId: string,
  editCartItem: func.isRequired,
  deleteFromCart: func.isRequired,
};
MyCartProductActions.defaultProps = {
  slug: '',
  productId: '',
};
export default MyCartProductActions;
