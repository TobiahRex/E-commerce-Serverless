import React from 'react';
import PropTypes from 'prop-types';

function JuiceTitle({ title }) {
  return (
    <div className="desc__title">
      <h1>{title}</h1>
    </div>
  );
}
JuiceTitle.propTypes = {
  title: string.isRequired,
};
export default JuiceTitle;
