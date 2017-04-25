import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function SocialMediaBtns() {
  return (
    <div className="desc__smedia">
      <ul className="smedia__btn--list">
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
