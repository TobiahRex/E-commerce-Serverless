import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

export default function AllProducts() {
  return (
    <div className="products__container">
      <div className="products__breadcrumb--container">
        <ul className="list">
          <li className="path">
            <Link className="path__link" to="/">Home</Link>
            <FontAwesome
              className="path__link--right-chevron"
              name="angle-right"
            />
          </li>
          <li className="path">
            Juices
          </li>
        </ul>
      </div>
      <div className="products__title">
        <h1>Juices</h1>
      </div>
      <div className="products__body">
        <div className="products__sidebar">
          <div className="products__sidebar--nicotine">
            <h1>Nicotine Strength</h1>
          </div>
        </div>
        <div className="products__main">
          <div className="products__main--toolbar">
            <div className="toolbar__position-sort">
              <div className="title-bar">
                <p>Sort By Position</p>
                <button>
                  <span className="btn-flex-parent">
                    <FontAwesome name="angle-down" />
                  </span>
                </button>
              </div>
              <div className="dd-content">
                <ul className="dd-content__list">
                  <li className="option--name">
                    <div className="option__icon">
                      <FontAwesome name="angle-right" />
                    </div>
                    <div className="option__name">
                      <p>Name</p>
                    </div>
                  </li>
                  <li className="option--price">
                    <div className="option__icon">
                      <FontAwesome name="angle-right" />
                    </div>
                    <div className="option__price">
                      <p>Price</p>
                    </div>
                  </li>
                  <li className="option--popularity">
                    <div className="option__icon">
                      <FontAwesome name="angle-right" />
                    </div>
                    <div className="option__popularity">
                      <p>Popularity</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="toolbar__view">
              <div className="view--grid">
                <FontAwesome name="th-large" />
              </div>
              <div className="view--list">
                <FontAwesome name="list-alt" />
              </div>
            </div>
          </div>
          <div className="products__main--table">
            <h1>Table</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
