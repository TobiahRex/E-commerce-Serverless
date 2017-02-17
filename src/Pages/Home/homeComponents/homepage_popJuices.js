import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';

import JuiceCard from '../../../Components/ProductCards/productCard';

class HomepagePopJuices extends PureComponent {
  static propTypes = {
    popJuices: PropTypes.arrayOf(PropTypes.object.isRequired),
  }

  renderJuiceCards = () =>
    this.props.popJuices.map((juiceObj, i) => (
      <JuiceCard
        key={`homepage-juices-grid-card-parent-${i}`}
        juiceObj={juiceObj}
        className={'homepage-juices-grid-card'}
      />
    )
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
  popJuices: products.popJuices,
});
export default connect(mapStateToProps, null)(HomepagePopJuices);
