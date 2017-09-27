import React from 'react';
import moment from 'moment';
import {
  intlShape,
  injectIntl,
} from 'react-intl';
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
import './assets/styles/style.css';

class UserStories extends React.Component {
  constructor(props) {
    super(props);

    const {
      intl: {
        messages: {
          'user-stories.breadCrumb.paths1': bcPaths1,
          'user-stories.breadCrumb.lastCrumb': lastCrumb,
        },
      },
    } = props;

    this.intl = {
      bcPaths1,
      lastCrumb,
    };
  }

  componentDidUpdate() {
    WebflowAnimations();
  }

  renderHelper = data =>
    data.map((dataObj) => { // eslint-disable-line
      if (dataObj.component === 'UserCard') {
        return (
          <UserCard
            {...dataObj.props}
            key={new Buffer(dataObj.props.CardHdr.header, 'utf8').toString('base64')}
          />
        );
      }
    })

  render() {
    return (
      <div className="vape-news__container" key={moment().format('YYMMDDSSSS')} >
        <BreadCrumb
          paths={[this.intl.bcPaths1]}
          classes={['home']}
          destination={['']}
          lastCrumb={this.intl.lastCrumb}
        />

        <HdrPage header={'user-stories.header.title'} />

        {this.renderHelper(contentData.content)}
      </div>
    );
  }
}
UserStories.propTypes = {
  intl: intlShape.isRequired,
};
const UserStoriesWithIntl = injectIntl(UserStories);
export default UserStoriesWithIntl;
