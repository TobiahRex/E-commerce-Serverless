import React from 'react';
import PropTypes from 'prop-types';

function JuiceTitle({ title }) {
  return (
    <div className="desc__title">
      <h1>{title}</h1>
    </div>
  );
}
const { string, shape } = PropTypes;
JuiceTitle.propTypes = {
  title: shape({
    en: string,
    ja: string,
  }).isRequired,
};
export default JuiceTitle;
