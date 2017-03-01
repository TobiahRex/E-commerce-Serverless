import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

export default function AllProducts() {
  return (
    <div className="products products--container">
      <div className="products__breadcrumb">
        <ul className="products__breadcrumb--list">
          <li className="breadcrumb__path">
            <Link className="breadcrumb__path--link" to="/">Home</Link>
            <FontAwesome
              className="breadcrumb__path--right-chevron"
              name="angle-right"
            />
          </li>
          <li className="breadcrumb__path">
            <p className="breadcrumb__path--label">Juices</p>
          </li>
        </ul>
      </div>
      <div className="products__title">
        <h1>Juices</h1>
      </div>
      <div className="products__body">
        <div className="body--main">
          <div className="main--toolbar">
            <div className="toolbar--sort-position">
              <span className="relative-parent">
                <div className="sort-position--title-bar">
                  <p>Sort By{'\u00A0'}
                    <span className="sort-position--label">
                      Position
                    </span>
                  </p>
                  <button className="ddn-button">
                    <span className="btn-flex-parent">
                      <FontAwesome name="angle-down" />
                    </span>
                  </button>
                </div>
                <div className="sort-position--dd-content">
                  <ul className="dd-content__list">
                    <li className="list__option">
                      <div className="list__option--icon">
                        <FontAwesome name="angle-right" />
                      </div>
                      <div className="list__option--label">
                        <p>Name</p>
                      </div>
                    </li>
                    <li className="list__option">
                      <div className="list__option--icon">
                        <FontAwesome name="angle-right" />
                      </div>
                      <div className="list__option--label">
                        <p>Price</p>
                      </div>
                    </li>
                    <li className="list__option">
                      <div className="list__option--icon">
                        <FontAwesome name="angle-right" />
                      </div>
                      <div className="list__option--label">
                        <p>Popularity</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </span>
            </div>
            <div className="toolbar--view">
              <div className="view--grid">
                <FontAwesome name="th-large" />
              </div>
              <div className="view--list">
                <FontAwesome name="list-alt" />
              </div>
            </div>
            <div className="toolbar--show-per">
              <div className="title-bar">
                {/* TODO: Change number in title to dynamic quality */}
                <p>Show 5 per page</p>
                <button>
                  <span className="btn-flex-parent">
                    <FontAwesome name="angle-down" />
                  </span>
                </button>
              </div>
              <div className="dd-content">
                <ul className="dd-content__list">
                  <li className="option">
                    <div className="option__icon">
                      <FontAwesome name="angle-right" />
                    </div>
                    <div className="option__label">
                      <p>Name</p>
                    </div>
                  </li>
                  <li className="option">
                    <div className="option__icon">
                      <FontAwesome name="angle-right" />
                    </div>
                    <div className="option__label">
                      <p>Price</p>
                    </div>
                  </li>
                  <li className="option">
                    <div className="option__icon">
                      <FontAwesome name="angle-right" />
                    </div>
                    <div className="option__label">
                      <p>Popularity</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="toolbar--visible">
              {/* TODO: Set interger dynamically */}
              <p>5 item(s)</p>
            </div>
            <div className="toolbar--visible--total">
              {/* TODO: set interger dynamically */}
              <p>of 10 total</p>
            </div>
            <div className="toolbar--pagination">
              <ul className="pagination--list">
                <li>hi</li>
              </ul>
            </div>
          </div>
          <div className="main--table">
            <div className="table__row--list-view" style={{ display: 'none' }}>
              <div className="row--image">
                <img className="image--src" alt="NJ2JP Juice" />
                {/* TODO: Set this image--label dynamically based on sales analytics. */}
                <div className="image--label">Hot</div>
              </div>
              <div className="row--desc">
                <div className="row__promotion">
                  <h3>Buy 4 Bottles Get 25% Off</h3>
                </div>
                <div className="row__title">
                  <h3>Strawberries {'N\''} Cream</h3>
                </div>
                <div className="row__price">
                  <h3 className="row__price--label">
                    <FontAwesome name="usd" />
                    {/* TODO: Set this value dynamically */}
                    30.00
                  </h3>
                  <p className="price--tax-label">
                    <FontAwesome name="plus" />{'\u00A0'}Tax
                  </p>
                  <p className="price--include-shipping">
                    Free Shipping
                  </p>
                </div>
                <div className="row__nicotine-strengths">
                  <p className="nicotine-strengths--label">
                    Nicotine Strengths (mgs)
                  </p>
                  <ul className="nicotine-strenghts--list">
                    <li className="list--option">2</li>
                    <li className="list--option">4</li>
                    <li className="list--option">6</li>
                    <li className="list--option">8</li>
                  </ul>
                </div>
                <div className="row__product-blurb">
                  <p>A delicious and intense Fruity Pebbles Cereal flavor. It’s D-licious!!!</p>
                </div>
                <div className="row__action-btns">
                  <div className="action-btns--container">
                    <div className="action-btns__qty">
                      <ul className="qty--list">
                        <li className="list--label">
                          <p>Quantity</p>
                        </li>
                        <li className="list--readout">
                          {/* TODO: Set this dynamically */}
                          <p>0</p>
                        </li>
                        <li className="list--pm-btns">
                          <button className="pm-btns--plus">
                            <FontAwesome name="plus" />
                          </button>
                          <button className="pm-btns--minus">
                            <FontAwesome name="minus" />
                          </button>
                        </li>
                      </ul>
                      <div className="qty--atc">
                        <button className="atc--btn">
                          <span className="btn-flex-parent">
                            <FontAwesome name="shopping-cart" />
                            Add To Cart
                          </span>
                        </button>
                      </div>
                    </div>
                    <p className="action-btns--qty-msg">
                      Maximum of 4 bottles per Customer, per Address, per Japanese Law.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="table__row--grid-view">
              <div className="row--card">
                <div className="row__image">
                  <img className="image--src" alt="NJ2JP Juice" />
                  {/* TODO: Set this image--label dynamically based on sales analytics. */}
                  <div className="image--label">Hot</div>
                </div>
                <div className="row__desc">
                  <div className="desc__title">
                    <h3>
                      Strawberries N' Cream
                    </h3>
                    <span className="nicotine-sub-label">
                      Nicotine
                    </span>
                  </div>
                  <div className="desc__price">
                    <h3>
                      <FontAwesome name="usd" />
                      {/* TODO: dynamically set this value */}
                      30.00
                    </h3>
                  </div>
                </div>
                <div className="row__nicotine-strengths">
                  <p>Nicotine Strength (mg)</p>
                  <ul className="nicotine-strenghts--list">
                    <li className="list--option">2</li>
                    <li className="list--option">4</li>
                    <li className="list--option">6</li>
                    <li className="list--option">8</li>
                  </ul>
                </div>
              </div>
              <div className="row--card">
                <div className="row__image">
                  <img className="image--src" alt="NJ2JP Juice" />
                  {/* TODO: Set this image--label dynamically based on sales analytics. */}
                  <div className="image--label">Hot</div>
                </div>
                <div className="row__desc">
                  <div className="desc__title">
                    <h3>
                      Strawberries N' Cream
                    </h3>
                    <span className="nicotine-sub-label">
                      Nicotine
                    </span>
                  </div>
                  <div className="desc__price">
                    <h3>
                      <FontAwesome name="usd" />
                      {/* TODO: dynamically set this value */}
                      30.00
                    </h3>
                  </div>
                </div>
                <div className="row__nicotine-strengths">
                  <p>Nicotine Strength (mg)</p>
                  <ul className="nicotine-strenghts--list">
                    <li className="list--option">2</li>
                    <li className="list--option">4</li>
                    <li className="list--option">6</li>
                    <li className="list--option">8</li>
                  </ul>
                </div>
              </div>
              <div className="row--card">
                <div className="row__image">
                  <img className="image--src" alt="NJ2JP Juice" />
                  {/* TODO: Set this image--label dynamically based on sales analytics. */}
                  <div className="image--label">Hot</div>
                </div>
                <div className="row__desc">
                  <div className="desc__title">
                    <h3>
                      Strawberries N' Cream
                    </h3>
                    <span className="nicotine-sub-label">
                      Nicotine
                    </span>
                  </div>
                  <div className="desc__price">
                    <h3>
                      <FontAwesome name="usd" />
                      {/* TODO: dynamically set this value */}
                      30.00
                    </h3>
                  </div>
                </div>
                <div className="row__nicotine-strengths">
                  <p>Nicotine Strength (mg)</p>
                  <ul className="nicotine-strenghts--list">
                    <li className="list--option">2</li>
                    <li className="list--option">4</li>
                    <li className="list--option">6</li>
                    <li className="list--option">8</li>
                  </ul>
                </div>
              </div>
              <div className="row--card">
                <div className="row__image">
                  <img className="image--src" alt="NJ2JP Juice" />
                  {/* TODO: Set this image--label dynamically based on sales analytics. */}
                  <div className="image--label">Hot</div>
                </div>
                <div className="row__desc">
                  <div className="desc__title">
                    <h3>
                      Strawberries N' Cream
                    </h3>
                    <span className="nicotine-sub-label">
                      Nicotine
                    </span>
                  </div>
                  <div className="desc__price">
                    <h3>
                      <FontAwesome name="usd" />
                      {/* TODO: dynamically set this value */}
                      30.00
                    </h3>
                  </div>
                </div>
                <div className="row__nicotine-strengths">
                  <p>Nicotine Strength (mg)</p>
                  <ul className="nicotine-strenghts--list">
                    <li className="list--option">2</li>
                    <li className="list--option">4</li>
                    <li className="list--option">6</li>
                    <li className="list--option">8</li>
                  </ul>
                </div>
              </div>
              <div className="row--card">
                <div className="row__image">
                  <img className="image--src" alt="NJ2JP Juice" />
                  {/* TODO: Set this image--label dynamically based on sales analytics. */}
                  <div className="image--label">Hot</div>
                </div>
                <div className="row__desc">
                  <div className="desc__title">
                    <h3>
                      Strawberries N' Cream
                    </h3>
                    <span className="nicotine-sub-label">
                      Nicotine
                    </span>
                  </div>
                  <div className="desc__price">
                    <h3>
                      <FontAwesome name="usd" />
                      {/* TODO: dynamically set this value */}
                      30.00
                    </h3>
                  </div>
                </div>
                <div className="row__nicotine-strengths">
                  <p>Nicotine Strength (mg)</p>
                  <ul className="nicotine-strenghts--list">
                    <li className="list--option">2</li>
                    <li className="list--option">4</li>
                    <li className="list--option">6</li>
                    <li className="list--option">8</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
