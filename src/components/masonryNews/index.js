import React from 'react';
import './assets/styles/style.css';
import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
  contentData,
} from './assets/utils';
import {
  CardArticle,
} from './components';

class MasonryNews extends React.Component {
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
    data.map((dataObj) => {
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
    return (
      <div className="masonry-column">
        {this.renderHelper(contentData.english)}
      </div>
    );
  }
}

export default MasonryNews;
