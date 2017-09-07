import React from 'react';

import './assets/styles';
import { propTypes } from './assets/propValidation';
import { WebflowJs } from './assets/utils/index.js';

import {
  HdrPage,
  BreadCrumb,
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
            <div className="user-story-card__image user-story-card__image--landscape">
              <img
                alt="avatar"
                className="image image--landscape"
                src="/images/default-avatar.png"
              />
            </div>
            <div className="user-story-card__content">
              <div className="content-hdr__container content-hdr__container--portrait">
                <h2 className="content-hdr content-hdr--landscape">User Story Number 1</h2>
              </div>
              <div className="content-date__container content-date__container--portrait">
                <p className="content-date content-date--landscape">Sep 8, 2017</p>
              </div>
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
