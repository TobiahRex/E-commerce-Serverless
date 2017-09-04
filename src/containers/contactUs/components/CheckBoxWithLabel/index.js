import React from 'react';

import { WebflowJs } from './assets/utils';

const CheckBoxWithLabel = () => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="contact-us__send-copy--container container--checkbox w-checkbox">

      <input
        className="w-checkbox-input"
        data-name="Checkbox"
        id="checkbox"
        name="checkbox"
        type="checkbox"
      />

      <label
        className="contact-us__send-copy w-form-label"
        htmlFor="checkbox"
      >Send a copy of this email to yourself</label>

    </div>
  );
};


export default CheckBoxWithLabel;
