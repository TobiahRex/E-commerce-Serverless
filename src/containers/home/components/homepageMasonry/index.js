import React from 'react';

import './assets/styles/style.css';

import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
  contentData,
} from './assets/utils';

import {
  CardReview,
  CardArticle,
} from './components';

class MasonryReviews extends React.Component {
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

  renderHelper = data =>
    data.map((dataObj, i) => {
      if (dataObj.component === 'CardReview') {
        return (
          <CardReview
            {...dataObj.props}
            key={new Buffer(`${dataObj.props.CardImg.src + i + Date.now()}`, 'utf8').toString('base64')}
          />
        );
      }
      if (dataObj.component === 'CardArticle') {
        return (
          <CardArticle
            {...dataObj.props}
            key={new Buffer(`${dataObj.props.CardImg.src + i + Date.now()}`, 'utf8').toString('base64')}
          />
        );
      }
      return '';
    });

  render() {
    return (
      <div className="masonry-column">
        {this.renderHelper(contentData.english)}
      </div>
    );
  }
}

export default MasonryReviews;
