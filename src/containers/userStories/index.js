import React from 'react';
import moment from 'moment';
import {
  intlShape,
  injectIntl,
} from 'react-intl';
import './assets/styles';
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
  constructor(props) {
    super(props);

    const {
      intl: {
        messages: {
          'user-stories.breadCrumb.paths1': bcPaths1,
          'user-stories.breadCrumb.lastCrumb': lastCrumb,
          'user-stories.header.title': title,
        },
      },
    } = props;

    this.intl = {
      title,
      bcPaths1,
      lastCrumb,
    };
  }

  componentDidUpdate() {
    WebflowJs();
    WebflowAnimations();
  }

  renderHelper = data =>
    data.content.map((dataObj) => { // eslint-disable-line
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
      <div className="vape-news__container" key={moment().format('YYMMDDSSSS')} >
        <BreadCrumb
          paths={[this.intl.paths1]}
          classes={['home']}
          destination={['']}
          lastCrumb={this.intl.lastCrumb}
        />

        <HdrPage header={this.intl.title} />

        {this.renderHelper(contentData.english)}
      </div>
    );
  }
}
UserStories.propTypes = {
  intl: intlShape.isRequired,
};
const UserStoriesWithIntl = injectIntl(UserStories);
export default UserStoriesWithIntl;
