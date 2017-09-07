import React from 'react';

import { propTypes } from './assets/propValidation';
import { WebflowJs } from './assets/utils';

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
                src="https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg"
              />
            </div>
            <div className="user-story-card__content">
              <div className="content-hdr__container content-hdr__container--portrait">
                <h3 className="content-hdr content-hdr--landscape">User Story Number 1</h3>
              </div>
              <div className="content-date__container content-date__container--portrait">
                <div className="content-date content-date--landscape">Sep 8, 2017</div>
              </div>
              <div className="content-blurb__container content-blurb__container--portrait">
                <div className="content-blurb content-blurb--portrait">
                  The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserStories;
