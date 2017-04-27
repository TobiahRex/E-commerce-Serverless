import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

class NavbarCartProductsCardActions extends PureComponent {
  render() {
    return (
      <div className="products-list-card-actions">
        <div href="" className="products-list-card-actions-edit sweep-right">
          <button className="products-list-card-actions-delete sweep-right">
            <FontAwesome
              className="products-list-card-actions-edit-icon"
              name="pencil"
            />
          </button>
        </div>
        <button
          onClick={() => console.warn('DELETE this products')}
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
}

export default NavbarCartProductsCardActions;
