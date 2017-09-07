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

        <div className="animation--first user-stories__container user-stories__container--tablet">
          <div
            className="user-story-card__container user-story-card__container--landscape"
            data-ix="user-story-fade-in"
          >
            <CardImg link={contentData.english[0].props.CardImg.link} />
            <div className="user-story-card__content">
              <CardHdr header={contentData.english[0].props.CardHdr.header} />
              <CardDate date={contentData.english[0].props.CardDate.date} />
              <div className="content-blurb__container content-blurb__container--portrait">
                <p className="content-blurb content-blurb--portrait">
                  The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserStories;
