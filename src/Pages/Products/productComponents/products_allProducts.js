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
            <div className="toolbar--left">
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
                  <div
                    className="sort-position--dd-content"
                    style={{ display: 'none' }}
                  >
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
                <span className="relative-parent">
                  <div className="show-per--title-bar">
                    <p>Show
                      <span className="show-per--label">
                        {/* TODO: Change number in title to dynamic quality */}
                        {'\u00A0'}5{'\u00A0'}
                      </span>
                      per page
                    </p>
                    <button className="ddn-button">
                      <span className="btn-flex-parent">
                        <FontAwesome name="angle-down" />
                      </span>
                    </button>
                  </div>
                  <div className="show-per--dd-content" style={{ display: 'none' }}>
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
              <div className="toolbar--visible">
                {/* TODO: Set interger dynamically */}
                <p>
                  <span className="visible--label">
                    {'\u00A0'}5{'\u00A0'}
                  </span>
                item(s)</p>
              </div>
              <div className="toolbar--visible-total">
                {/* TODO: set interger dynamically */}
                <p>{'\u00A0'}of
                  <span className="visible-total--label">
                    {'\u00A0'}10{'\u00A0'}
                  </span>
                total</p>
              </div>
            </div>
            <div className="toolbar--right">
              <div className="toolbar--pagination">
                <ul className="pagination--list">
                  <li className="pagination__number">
                    <button className="number--button" onClick={() => console.info('go to next page')} >
                      1
                    </button>
                  </li>
                  <li className="pagination__number">
                    <button className="number--button" onClick={() => console.info('go to next page')} >
                      2
                    </button>
                  </li>
                  <li className="pagination__number">
                    <button className="number--button" onClick={() => console.info('go to next page')} >
                      3
                    </button>
                  </li>
                  <li className="pagination__number">
                    <button className="number--button" onClick={() => console.info('go to next page')} >
                      4
                    </button>
                  </li>
                  <li className="pagination__number">
                    <button className="number--button" onClick={() => console.info('go to next page')} >
                      5
                    </button>
                  </li>
                  <li className="pagination__number">
                    <button className="number--button" onClick={() => console.info('go to next page')} >
                      6
                    </button>
                  </li>
                  <li className="pagination__number">
                    <button className="number--button" onClick={() => console.info('go to next page')} >
                      7
                    </button>
                  </li>
                  <li className="pagination__number">
                    <button className="number--button" onClick={() => console.info('go to next page')} >
                      8
                    </button>
                  </li>
                  <li className="pagination__number">
                    <button className="number--button" onClick={() => console.info('go to next page')} >
                      9
                    </button>
                  </li>
                  <li className="pagination__number">
                    <button className="number--button" onClick={() => console.info('go to next page')} >
                      10
                    </button>
                  </li>
                  <li className="pagination__next">
                    <button className="next--icon">
                      <FontAwesome name="angle-right" />
                    </button>
                  </li>
                </ul>
              </div>
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
                  <div className="image--label">
                    <p>Hot</p>
                  </div>
                  <img className="image--src" alt="NJ2JP Juice" />
                  {/* TODO: Set this image--label dynamically based on sales analytics. */}
                  <div className="image--rating">
                    <ul className="image__stars-list">
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                    </ul>
                    <Link to="/reviews/123123" className="image__read-reviews" style={{ display: 'none' }}>
                      Read Reviews
                    </Link>
                  </div>
                </div>
                <div className="row__desc">
                  <div className="desc__title-top">
                    <h3>
                      Strawberries N' Cream
                      <span className="nicotine-sub-label">
                        {'\u00A0'}Nicotine
                      </span>
                    </h3>
                  </div>
                  <div className="desc__title-bottom">
                    <div className="title-bottom--price">
                      <h3>
                        <FontAwesome name="usd" />
                        {/* TODO: dynamically set this value */}
                        {'\u00A0'}30.00
                      </h3>
                      <p>
                        <FontAwesome name="plus" />
                        {'\u00A0'}Tax
                      </p>
                    </div>
                    <div className="title-bottom--in-stock">
                      <p>In Stock</p>
                      <p>SKU:
                        {/* TODO: dynamically set this SKU value */}
                        <span className="sku-number">
                          {'\u00A0'}123123{'\u00A0'}
                        </span>
                      </p>
                      <p>Free Shipping</p>
                    </div>
                  </div>
                </div>
                <div className="row__nicotine-strengths">
                  <p>Nicotine Strength (mg)</p>
                  <ul className="nicotine-strenghts--list">
                    <li className="list--option">
                      <button className="option--button sweep-right" >2</button>
                    </li>
                    <li className="list--option">
                      <button className="option--button sweep-right" >4</button>
                    </li>
                    <li className="list--option">
                      <button className="option--button sweep-right" >6</button>
                    </li>
                    <li className="list--option">
                      <button className="option--button sweep-right" >8</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row--card">
                <div className="row__image">
                  <img className="image--src" alt="NJ2JP Juice" />
                  {/* TODO: Set this image--label dynamically based on sales analytics. */}
                  <div className="image--label">Hot</div>
                  <div className="image--rating">
                    <ul className="image__stars-list">
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                    </ul>
                    <Link to="/reviews/123123" className="image__read-reviews">
                      Read Reviews
                    </Link>
                  </div>
                </div>
                <div className="row__desc">
                  <div className="desc__title-top">
                    <h3>
                      Strawberries N' Cream
                    </h3>
                    <span className="nicotine-sub-label">
                      Nicotine
                    </span>
                  </div>
                  <div className="desc__title-bottom">
                    <div className="title-bottom--price">
                      <h3>
                        <FontAwesome name="usd" />
                        {/* TODO: dynamically set this value */}
                        30.00
                      </h3>
                    </div>
                    <div className="title-bottom--in-stock">
                      <h3>In Stock</h3>
                      <p>SKU:
                        {/* TODO: dynamically set this SKU value */}
                        <span className="sku-number">
                          {'\u00A0'}123123{'\u00A0'}
                        </span>
                      </p>
                      <p>Free Shipping</p>
                    </div>
                  </div>
                </div>
                <div className="row__nicotine-strengths">
                  <p>Nicotine Strength (mg)</p>
                  <ul className="nicotine-strenghts--list">
                    <li className="list--option">
                      <button className="option--button" >2</button>
                    </li>
                    <li className="list--option">
                      <button className="option--button" >4</button>
                    </li>
                    <li className="list--option">
                      <button className="option--button" >6</button>
                    </li>
                    <li className="list--option">
                      <button className="option--button" >8</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row--card">
                <div className="row__image">
                  <img className="image--src" alt="NJ2JP Juice" />
                  {/* TODO: Set this image--label dynamically based on sales analytics. */}
                  <div className="image--label">Hot</div>
                  <div className="image--rating">
                    <ul className="image__stars-list">
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                    </ul>
                    <Link to="/reviews/123123" className="image__read-reviews">
                      Read Reviews
                    </Link>
                  </div>
                </div>
                <div className="row__desc">
                  <div className="desc__title-top">
                    <h3>
                      Strawberries N' Cream
                    </h3>
                    <span className="nicotine-sub-label">
                      Nicotine
                    </span>
                  </div>
                  <div className="desc__title-bottom">
                    <div className="title-bottom--price">
                      <h3>
                        <FontAwesome name="usd" />
                        {/* TODO: dynamically set this value */}
                        30.00
                      </h3>
                    </div>
                    <div className="title-bottom--in-stock">
                      <h3>In Stock</h3>
                      <p>SKU:
                        {/* TODO: dynamically set this SKU value */}
                        <span className="sku-number">
                          {'\u00A0'}123123{'\u00A0'}
                        </span>
                      </p>
                      <p>Free Shipping</p>
                    </div>
                  </div>
                </div>
                <div className="row__nicotine-strengths">
                  <p>Nicotine Strength (mg)</p>
                  <ul className="nicotine-strenghts--list">
                    <li className="list--option">
                      <button className="option--button" >2</button>
                    </li>
                    <li className="list--option">
                      <button className="option--button" >4</button>
                    </li>
                    <li className="list--option">
                      <button className="option--button" >6</button>
                    </li>
                    <li className="list--option">
                      <button className="option--button" >8</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row--card">
                <div className="row__image">
                  <img className="image--src" alt="NJ2JP Juice" />
                  {/* TODO: Set this image--label dynamically based on sales analytics. */}
                  <div className="image--label">Hot</div>
                  <div className="image--rating">
                    <ul className="image__stars-list">
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                    </ul>
                    <Link to="/reviews/123123" className="image__read-reviews">
                      Read Reviews
                    </Link>
                  </div>
                </div>
                <div className="row__desc">
                  <div className="desc__title-top">
                    <h3>
                      Strawberries N' Cream
                    </h3>
                    <span className="nicotine-sub-label">
                      Nicotine
                    </span>
                  </div>
                  <div className="desc__title-bottom">
                    <div className="title-bottom--price">
                      <h3>
                        <FontAwesome name="usd" />
                        {/* TODO: dynamically set this value */}
                        30.00
                      </h3>
                    </div>
                    <div className="title-bottom--in-stock">
                      <h3>In Stock</h3>
                      <p>SKU:
                        {/* TODO: dynamically set this SKU value */}
                        <span className="sku-number">
                          {'\u00A0'}123123{'\u00A0'}
                        </span>
                      </p>
                      <p>Free Shipping</p>
                    </div>
                  </div>
                </div>
                <div className="row__nicotine-strengths">
                  <p>Nicotine Strength (mg)</p>
                  <ul className="nicotine-strenghts--list">
                    <li className="list--option">
                      <button className="option--button" >2</button>
                    </li>
                    <li className="list--option">
                      <button className="option--button" >4</button>
                    </li>
                    <li className="list--option">
                      <button className="option--button" >6</button>
                    </li>
                    <li className="list--option">
                      <button className="option--button" >8</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row--card">
                <div className="row__image">
                  <img className="image--src" alt="NJ2JP Juice" />
                  {/* TODO: Set this image--label dynamically based on sales analytics. */}
                  <div className="image--label">Hot</div>
                  <div className="image--rating">
                    <ul className="image__stars-list">
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                      <li className="stars--star">
                        <FontAwesome name="star" />
                      </li>
                    </ul>
                    <Link to="/reviews/123123" className="image__read-reviews">
                      Read Reviews
                    </Link>
                  </div>
                </div>
                <div className="row__desc">
                  <div className="desc__title-top">
                    <h3>
                      Strawberries N' Cream
                    </h3>
                    <span className="nicotine-sub-label">
                      Nicotine
                    </span>
                  </div>
                  <div className="desc__title-bottom">
                    <div className="title-bottom--price">
                      <h3>
                        <FontAwesome name="usd" />
                        {/* TODO: dynamically set this value */}
                        30.00
                      </h3>
                    </div>
                    <div className="title-bottom--in-stock">
                      <h3>In Stock</h3>
                      <p>SKU:
                        {/* TODO: dynamically set this SKU value */}
                        <span className="sku-number">
                          {'\u00A0'}123123{'\u00A0'}
                        </span>
                      </p>
                      <p>Free Shipping</p>
                    </div>
                  </div>
                </div>
                <div className="row__nicotine-strengths">
                  <p>Nicotine Strength (mg)</p>
                  <ul className="nicotine-strenghts--list">
                    <li className="list--option">
                      <button className="option--button" >2</button>
                    </li>
                    <li className="list--option">
                      <button className="option--button" >4</button>
                    </li>
                    <li className="list--option">
                      <button className="option--button" >6</button>
                    </li>
                    <li className="list--option">
                      <button className="option--button" >8</button>
                    </li>
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
