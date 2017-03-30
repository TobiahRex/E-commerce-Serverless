import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import uuid from 'uuid';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminProducts({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="body__modal">
      <div className="modal__title">
        <h1>Modify Product</h1>
      </div>

      <div className="modal__status-msg--container">
        <FontAwesome name="info-circle" />
        <p>You can either change the information below or delete the product all together.</p>
      </div>

      <div className="modal__category--container">
        <div className="category__title admin-dash__small-title">
          <h3>Product Category</h3>
        </div>

        <div className="category__action-section">

          <div className="category__save-section">
            <div className="category__periodicity">
              <div className="periodicity__ddn--readout">
                <input type="text" className="readout--msg" disabled value="Today" />
                <button className="readout--btn sweep-right">
                  <span className="flex-btn-parent">
                    <FontAwesome name="angle-down" />
                  </span>
                </button>
              </div>
              <div className="periodicity__ddn--content">
                <ul className="ddn--content__list">
                  {/* NOTE: These need to be rendered dynamically, and the option selected, should absent from the available choices. */}
                  <li className="list--option sweep-right">
                    <p>Today</p>
                  </li>
                  <li className="list--option sweep-right">
                    <p>Week</p>
                  </li>
                  <li className="list--option sweep-right">
                    <p>Month</p>
                  </li>
                  <li className="list--option sweep-right">
                    <p>Quarter</p>
                  </li>
                  <li className="list--option sweep-right">
                    <p>Semi-Annual</p>
                  </li>
                  <li className="list--option sweep-right">
                    <p>Annual</p>
                  </li>
                  <li className="list--option sweep-right">
                    <p>Lifetime</p>
                  </li>
                </ul>
              </div>
            </div>
            <button className="medium-size-btn">
              Save Category
            </button>
            <button className="medium-size-btn">
              Add New
            </button>
          </div>

          <div className="category__new-section">
            <div className="new-section__title admin-dash__small-title">
              <h4>New Category Name</h4>
            </div>

            <div className="new-section__input--container">
              <input type="text" />
            </div>

            <div className="new-section__action-btns">
              <button className="cancel-btn medium-size-btn">
                Cancel
              </button>
              <button className="save-new medium-size-btn">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal__image--container">
        <div className="image__title admin-dash__small-title">
          <h3>Images</h3>
          <div className="image__instructions">
            <p>* Click <span className="bold">[image box]</span> then one of the action buttons on the right to modify images.</p>
            <p>** To re-order images.  Click <span className="bold">[image 1]
            </span> then <span className="bold">[image 2]</span> then <span className="bold">{'"Move Image"'}</span></p>
          </div>
        </div>

        <div className="image__row">
          <table className="row__table">
            <thead className="table__header">
              <tr className="header--row">
                <th className="row--primary">Primary</th>
                <th className="row--thumb1">Thumb 1</th>
                <th className="row--thumb2">Thumb 2</th>
                <th className="row--thumb3">Thumb 3</th>
                <th className="row--thumb4">Thumb 4</th>
                <th className="row--thumb5">Thumb 5</th>
              </tr>
            </thead>
            <tbody className="table__body ">
              <tr className="body__row">
                <td className="row--primary">
                  <img src="../Images/nj2jp_juice_card_fvm.png" alt="Juice Card" />
                </td>
                <td className="row--thumb1">
                  <img src="../Images/nj2jp_juice_card_fvm.png" alt="Juice Card" />
                </td>
                <td className="row--thumb2">
                  <img src="../Images/nj2jp_juice_card_fvm.png" alt="Juice Card" />
                </td>
                <td className="row--thumb3">
                  <img src="../Images/nj2jp_juice_card_fvm.png" alt="Juice Card" />
                </td>
                <td className="row--thumb4">
                  <img src="../Images/nj2jp_juice_card_fvm.png" alt="Juice Card" />
                </td>
                <td className="row--thumb5">
                  <img src="../Images/nj2jp_juice_card_fvm.png" alt="Juice Card" />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="image__action-btns">
            <button className="medium-size-btn">
              Upload Image
            </button>
            <button className="medium-size-btn">
              Delete Image
            </button>
            <button className="medium-size-btn">
              Move Image
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
AdminProducts.propTypes = propTypes;
export default AdminProducts;
