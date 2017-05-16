import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

import JuiceCard from '../../../components/ProductCards/productCard';

class HomepagePopJuices extends PureComponent {
  static propTypes = {
    popularProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  renderJuiceCards = () =>
    this.props.popularProducts.map(juiceObj => (
      <JuiceCard
        key={juiceObj._id}
        juiceObj={juiceObj}
        className={'homepage-juices-grid-card'}
      />
    ),
  )

  render() {
    return (
      <div className="homepage-juices">
        <h1 className="homepage-juices-title">Popular Juices</h1>
        <div className="homepage-juices-grid-parent">
          {this.renderJuiceCards()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ products }) => ({
  popularProducts: products.popularProducts,
});
export default connect(mapStateToProps, null)(HomepagePopJuices);
