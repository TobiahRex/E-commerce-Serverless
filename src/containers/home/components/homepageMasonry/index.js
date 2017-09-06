import React from 'react';
import Masonry from 'masonry-layout';
import './assets/styles/reviews.css';
import './assets/styles/news.css';

import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
  contentData,
} from './assets/utils';

import {
  CardReview,
  CardArticle,
} from './components';

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
      itemSelector: '.checkout__grid',
      columnWidth: 340,
      gutter: 22,
    });
  }

  renderHelper = (data) => {
    const length = data.length;
    const groupLength = Math.ceil(length / 3);
    

    data.map((dataObj) => {
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
  }

  render() {
    return (
      <div className="masonry-column">
        {this.renderHelper(contentData.english)}
      </div>
    );
  }
}

export default HomepageMasonry;
