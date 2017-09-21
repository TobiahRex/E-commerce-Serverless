import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';
import { propTypes } from './assets/propValidation';
import { contentData } from './assets/utils';
import { CardReview, CardArticle } from './components';
import './assets/styles/style.css';
import './assets/styles/reviews.css';
import './assets/styles/news.css';

class NewsReviews extends React.Component {
  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.state = {
      x: '',
    };
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
      <div className="splash-news-reviews">
        <div className="news-reviews__header-container">
          <h2 className="header__text" data-ix="flyout-footer">
            <IntlMsg id="home.news.title" />
          </h2>
        </div>
        <div className="news-reviews__masonry-container">
          <div>
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
        </div>
      </div>
    );
  }
}

export default NewsReviews;
