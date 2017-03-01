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
        <div className="body--sidebar">
          <div className="sidebar__title">
            <h1 className="sidebar__title--nicotine-strength">
              Nicotine Strength
            </h1>
          </div>
        </div>
        <div className="body--main">
          <div className="main--toolbar">
            <div className="toolbar--sort-position">
              <div className="sort-position--title-bar">
                <p>Sort By Position</p>
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
            <div className="table__row">
              <div className="row__image">
                <img className="image--src" alt="NJ2JP Juice" />
                {/* TODO: Set this image--label dynamically based on sales analytics. */}
                <div className="image--label">Hot</div>
              </div>
              <div className="row--desc">
                <div className="row__promotion">
                  <h3>Buy 4 Bottles Get 25% Off</h3>
                </div>
                <div className="row__title">
                  <h3>Strawberries N' Cream</h3>
                </div>
                <div className="row__price">
                  <h3 className="row__price--label">
                    <FontAwesome name="usd" />
                    {/* TODO: Set this value dynamically */}
                    30.00
                  </h3>
                  <p className="row__price--tax-label">
                    <FontAwesome name="plus" />{'\u00A0'}Tax
                  </p>
                  <p className="row__price--include-shipping">
                    Free Shipping
                  </p>
                </div>
                <div className="row__nicotine-strengths">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
