import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class NavbarCartProductsCardActions extends PureComponent {

  render() {
    return (
      <div className="products-list-card-actions">
        <div href="" className="products-list-card-actions-edit">
          <Link>
            <FontAwesome
              className="products-list-card-actions-edit-icon"
              name="pencil"
            />
          </Link>
        </div>
        <button href="" className="products-list-card-actions-delete">
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
