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
            <div className="table__row--list-view">
              <div className="row--image">
                {/* TODO: Set this image--label dynamically based on sales analytics. */}
                <div className="image--label">
                  <p>Hot</p>
                </div>
                <div className="image--src-container">
                  <img className="image--src" alt="NJ2JP Juice" />
                </div>
              </div>
              <div className="row--desc">
                <div className="desc__top">
                  <div className="desc__top-left">
                    <div className="top-left--title">
                      <h3>Strawberries {'N\''} Cream</h3>
                    </div>
                    <div className="top-left--price">
                      <h3 className="price--label">
                        <FontAwesome name="usd" />
                        {/* TODO: Set this value dynamically */}
                        30.00
                      </h3>
                      <div className="price--tax">
                        <p className="price--tax-label">
                          <FontAwesome name="plus" />{'\u00A0'}Tax
                        </p>
                        <p className="price--include-shipping">
                          Free Shipping
                        </p>
                      </div>
                      <div className="price--in-stock">
                        <p>In Stock</p>
                        <p>SKU:
                          {/* TODO: Dynamically set this value */}
                          <span className="price--in-stock__sku">
                            {'\u00A0'}123123
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="top-left--nic-strengths">
                      <p className="nic-strengths--label">
                        NICOTINE STRENGTHS (mgs)
                      </p>
                      <ul className="nic-strengths--list">
                        <li className="list--option">
                          <button className="list-btn sweep-right">2</button>
                        </li>
                        <li className="list--option">
                          <button className="list-btn sweep-right">4</button>
                        </li>
                        <li className="list--option">
                          <button className="list-btn sweep-right">6</button>
                        </li>
                        <li className="list--option">
                          <button className="list-btn sweep-right">8</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="desc__top-right">
                    <div className="right-top__rating-label">
                      <h3>Rating</h3>
                    </div>
                    <div className="right-top__rating-stars">
                      <FontAwesome name="star" />
                      <FontAwesome name="star" />
                      <FontAwesome name="star" />
                      <FontAwesome name="star" />
                      <FontAwesome name="star" />
                    </div>
                    <div className="right-top__read-reviews-label">
                      <Link to="/reviews">Read Reviews</Link>
                    </div>
                  </div>
                </div>
                <div className="desc__middle">
                  <p>A delicious and intense Fruity Pebbles Cereal flavor. It’s D-licious!!!</p>
                </div>
                <div className="desc__bottom">
                  <div className="action-btns--container">
                    <p className="action-btns--qty-msg">
                      Maximum of 4 bottles per Customer, per Address, per Japanese Law.
                    </p>
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
                    </div>
                    <div className="action-btns__add-to-cart">
                      <button className="add-to-cart--btn">
                        <span className="btn-flex-parent">
                          <FontAwesome name="shopping-cart" />
                          Add To Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row--social">
                <ul className="row__social-list">
                  <li className="social-list--like">
                    <button className="like-btn">
                      <span className="btn-flex-parent">
                        <FontAwesome
                          className="like-btn--thumb-icon"
                          name="thumbs-up"
                        />
                        <p className="like-btn--label">Like</p>
                        {/* TODO Dynamically set this value */}
                        <p className="like-btn--number">99</p>
                      </span>
                    </button>
                  </li>
                  <li className="social-list--share">
                    <button className="share-btn">
                      <span className="btn-flex-parent">
                        <FontAwesome
                          className="share-btn--facebook-icon"
                          name="facebook"
                        />
                        <p className="share-btn--label">Share</p>
                      </span>
                    </button>
                  </li>
                  <li className="social-list--tweet">
                    <button className="tweet-btn">
                      <span className="btn-flex-parent">
                        <FontAwesome
                          className="tweet-btn--twitter-icon"
                          name="twitter"
                        />
                        <p className="tweet-btn--label">Tweet</p>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="row--promotion-banner">
                <h3>Buy 4 Bottles & Get 25% Off Your Order</h3>
              </div>
            </div>
            <div className="table__row--grid-view" style={{ display: 'none' }}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
