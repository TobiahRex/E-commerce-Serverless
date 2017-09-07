import React from 'react';
import moment from 'moment';
import './assets/styles';
import { propTypes } from './assets/propValidation';
import {
  WebflowJs,
  WebflowAnimations,
  contentData,
} from './assets/utils/index';
import {
  HdrPage,
  BreadCrumb,
  UserCard,
} from './components';

class UserStories extends React.Component {
  static propTypes = propTypes;

  constructor(props) {
    super(props);

    this.state = {
      x: '',
    };
  }

  componentDidUpdate() {
    WebflowJs();
    WebflowAnimations();
  }

  renderHelper = data =>
    data.map((dataObj) => { // eslint-disable-line
      if (dataObj.component === 'UserCard') {
        return (
          <UserCard
            {...dataObj.props}
            key={new Buffer(dataObj.props.CardHdr.header + Date.now(), 'utf8').toString('base64')}
          />
        );
      }
    })

  render() {
    return (
      <div className="japanese vape-news__container" key={moment().format('YYMMDDSSSS')} >
        <BreadCrumb
          paths={['Home']}
          classes={['home']}
          destination={['']}
          lastCrumb="User Stories"
        />

        <HdrPage header="User Stories" />

        {this.renderHelper(contentData.english)}
      </div>
    );
  }
}

export default UserStories;
