import React, { PureComponent } from 'react';

class NavbarNavsShopDropdnContent extends PureComponent {
  render() {
    return (
      <span className="shop-dropdown-content">
        <span className="shop-dropdown-content-parent">
          <div className="shop-dropdown-content-topThird">
            <div className="shop-dropdown-content-topThird-parent">
              <div className="shop-dropdown-content-topThird-parent-title">
                <h1>Nicotine Juices:</h1>
              </div>
              <div className="shop-dropdown-content-topThird-parent-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem reprehenderit laborum dolorem nesciunt eaque quas, rem ullam quia! Quasi, itaque quos inventore magni aliquam at autem dolor harum accusamus et.
              </div>
            </div>
            <div className="shop-dropdown-content-topThird-video">Video</div>
          </div>
          <div className="shop-dropdown-content-midThird">
            <div className="shop-dropdown-content-midThird-title">
              <h2>Switch Juice</h2>
            </div>
            <div className="shop-dropdown-content-midThird-juices">
              <div className="shop-dropdown-content-midThird-juices-card">
                <div className="shop-dropdown-content-midThird-juices-card-title">
                  <h4>French Vanilla Mocha</h4>
                </div>
                <div className="shop-dropdown-content-midThird-juices-card-image" />
              </div>
              <div className="shop-dropdown-content-midThird-juices-card">
                <div className="shop-dropdown-content-midThird-juices-card-title">
                  <h4>Keylime Pie</h4>
                </div>
                <div className="shop-dropdown-content-midThird-juices-card-image" />
              </div>
              <div className="shop-dropdown-content-midThird-juices-card">
                <div className="shop-dropdown-content-midThird-juices-card-title">
                  <h4>Pina Colada</h4>
                </div>
                <div className="shop-dropdown-content-midThird-juices-card-image" />
              </div>
              <div className="shop-dropdown-content-midThird-juices-card">
                <div className="shop-dropdown-content-midThird-juices-card-title">
                  <h4>Fruity Bamm Bamm</h4>
                </div>
                <div className="shop-dropdown-content-midThird-juices-card-image" />
              </div>
              <div className="shop-dropdown-content-midThird-juices-card">
                <div className="shop-dropdown-content-midThird-juices-card-title">
                  <h4>Strawberries {('N\'')} Cream</h4>
                </div>
                <div className="shop-dropdown-content-midThird-juices-card-image" />
              </div>
              <div className="shop-dropdown-content-midThird-juices-card">
                <div className="shop-dropdown-content-midThird-juices-card-title">
                  <h4>Papple Berry</h4>
                </div>
                <div className="shop-dropdown-content-midThird-juices-card-image" />
              </div>
            </div>
          </div>
          <div className="shop-dropdown-content-bottomThird">
            <span className="shop-dropdown-content-bottomThird-leftSide">
              <button className="shop-dropdown-content-bottomThird-recommend">
                <span>Recommend Another Juice Line</span>
              </button>
            </span>
            <span className="shop-dropdown-content-bottomThird-rightSide">
              <h4 className="shop-dropdown-content-bottomThird-rightSide-promoSoft">
                <span>Get 10% OFF</span>
              </h4>
              <h4 className="shop-dropdown-content-bottomThird-rightSide-promoHard">
                <span>When You Become A Member</span>
              </h4>
            </span>
          </div>
        </span>
      </span>
    );
  }
}

export default NavbarNavsShopDropdnContent;
