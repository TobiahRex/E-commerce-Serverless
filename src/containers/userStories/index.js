import React from 'react';

import './assets/styles';
import { propTypes } from './assets/propValidation';
import { WebflowJs } from './assets/utils/index';

import {
  HdrPage,
  BreadCrumb,
  CardImg,
  CardDate,
  CardHdr,
  CardBlurb,
} from './components';

class UserStories extends React.Component {
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

  render() {
    const contentData = {
      english: [
        {
          component: '',
          props: {
            CardImg: {
              link: '/images/default-avatar.png',
            },
            CardHdr: {
              header: 'User Story 1',
            },
            CardDate: {
              date: 'Sep 8, 2017',
            },
            CardBlurb: {
              date: 'The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.',
            },
          },
        },
      ],
    };
    return (
      <div className="japanese vape-news__container">
        <BreadCrumb
          paths={['Home']}
          classes={['home']}
          destination={['']}
          lastCrumb="User Stories"
        />

        <HdrPage header="User Stories" />

        <UserCard />
      </div>
    );
  }
}

export default UserStories;
