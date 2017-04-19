import React, { PureComponent } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import NavbarNavsShopDropdnJuiceCards from './navbarNavs_shop_dropdn_midThird_juiceCard';

const { arrayOf, object, func } = React.PropTypes;

class NavbarNavsShopDropdnMidthird extends PureComponent {
  static propTypes = {
    popJuices: arrayOf(object).isRequired,
    push: func.isRequired,
  }

  renderJuiceCards = () => this.props.popJuices.map(juiceObj => (
    <NavbarNavsShopDropdnJuiceCards
      key={juiceObj.title}
      juiceInfo={juiceObj}
      tag={juiceObj.tag}
      push={this.push}
    />))

  push = e => this.props.push(e.target.dataset.tag);

  render() {
    return (
      <div className="shop-dropdown-content-midThird">
        <div className="shop-dropdown-content-midThird-title">
          <h2>
            <i>Switch Juice</i>
          </h2>
        </div>
        <div className="shop-dropdown-content-midThird-juices">
          {/* BUG - renderJuicesCards is a new function on each render. */}
          {this.renderJuiceCards()}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  push: location => dispatch(push(location)),
});
export default connect(null, mapDispatchToProps)(NavbarNavsShopDropdnMidthird);
