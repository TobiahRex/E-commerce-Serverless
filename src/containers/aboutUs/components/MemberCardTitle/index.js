import React from 'react';

import { WebflowJs } from './assets/utils';

const MemberCardTitle = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div>
      <h3 className="content--heading staff__content">Brian Wilson
      </h3>
      <h4 className="content--sub-heading staff__content">CEO, CMO, Co-founder
      </h4>
    </div>
  );
};


export default MemberCardTitle;
