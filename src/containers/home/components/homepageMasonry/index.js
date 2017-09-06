import React from 'react';
import Masonry from 'masonry-layout';
import './assets/styles/style.css';
import './assets/styles/reviews.css';
import './assets/styles/news.css';
import { propTypes } from './assets/propValidation';
import { WebflowJs, contentData } from './assets/utils';
import { CardReview, CardArticle } from './components';

class HomepageMasonry extends React.Component {
  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.state = {
      x: '',
    };
  }

  componentDidMount() {
    WebflowJs(); // eslint-disable-line
  }

  componentWillUpdate() {
    const msnry = new Masonry('.grid', { // eslint-disable-line
      itemSelector: '.masonry__grid',
      columnWidth: 340,
      gutter: 22,
    });
  }

  renderHelper = data => data.map((dataObj) => {
    if (dataObj.component === 'CardReview') {
      return (
        <CardReview
          {...dataObj.props}
          key={new Buffer(`${dataObj.props.CardBody.header + Date.now()}`, 'utf8').toString('base64')}
        />
      );
    }
    if (dataObj.component === 'CardArticle') {
      return (
        <CardArticle
          {...dataObj.props}
          key={new Buffer(`${dataObj.props.CardImg.src + Date.now()}`, 'utf8').toString('base64')}
        />
      );
    }
    return '';
  });

  render() {
    const contentArray = [...contentData.english];
    const groupLength = Math.floor(contentArray.length / 3);
    return (
      <div>
        <h1 className="masonry-header">News & Reviews</h1>
        <div className="masonry-column grid">
          <div className="masonry__grid">
            {this.renderHelper(contentArray.slice(0, groupLength))}
          </div>
          <div className="masonry__grid">
            {this.renderHelper(contentArray).slice(groupLength, groupLength * 2)}
          </div>
          <div className="masonry__grid">
            {this.renderHelper(contentArray).slice(groupLength * 2, groupLength * 4)}
          </div>
        </div>
      </div>
    );
  }
}

export default HomepageMasonry;
