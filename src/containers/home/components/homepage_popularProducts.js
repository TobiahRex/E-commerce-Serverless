import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import JuiceCard from '../../../components/ProductCards/productCard';

const { arrayOf, object } = PropTypes;

class HomepagePopJuices extends PureComponent {
  static propTypes = {
    popularProducts: arrayOf(object).isRequired,
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
          {/* {this.renderJuiceCards()} */}
          <h1>Different Design Here</h1>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ products }) => ({
  popularProducts: products.popularProducts,
});
export default connect(mapStateToProps, null)(HomepagePopJuices);
