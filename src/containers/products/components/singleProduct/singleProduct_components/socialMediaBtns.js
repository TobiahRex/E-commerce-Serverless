import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import ReactFBLike from './socialMediaBtns.fbLike';

function SocialMediaBtns(props) {
  return (
    <div className="desc__smedia">
      <ul className="smedia__btn--list">
        <ReactFBLike
          appId={process.env.FACEBOOK_APP_ID}
          language="en_US"
          version="v2.9"
          href={props.location}
          layout="button_count"
          action="like"
          size="large"
          share={false}
          showFaces
          onClick={props.fbLike}
        />
        <li className="list__like-btn hover-bob">
          <FontAwesome name="thumbs-o-up" />
          <p>Like</p>
          <p className="like-btn__qty">99</p>
        </li>
        <li className="list__share-btn hover-bob">
          <FontAwesome name="facebook" />
          <p>Share</p>
        </li>
        <li className="list__tweet-btn hover-bob">
          <FontAwesome name="twitter" />
          <p>tweet</p>
        </li>
      </ul>
    </div>
  );
}
const { string, func } = PropTypes;
SocialMediaBtns.propTypes = {
  location: string.isRequired,
  fbLike: func.isRequired,
};
export default SocialMediaBtns;
