import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import ReactFBLike from 'react-fb-like';

function SocialMediaBtns(props) {
  return (
    <div className="desc__smedia">
      <ul className="smedia__btn--list">
        <ReactFBLike
          href={props.location}
          layout="button_count"
          action="like"
          size="large"
          share="false"
          showFaces="true"
          appId={process.env.FACEBOOK_APP_ID}
          version="2.9"
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
const { string } = PropTypes;
SocialMediaBtns.propTypes = {
  location: string,
};
SocialMediaBtns.defaultProps = {
  location: `${process.env.BASE_URL}/juice/fruity_bamm_bamm`,
};
export default SocialMediaBtns;
