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
        <div className="products__main">
          <div className="products__main--toolbar">
            <div className="toolbar--sort-position">
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
          <div className="products__main--table">
            <h1>Table</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
