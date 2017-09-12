import PropTypes from 'prop-types';

const { string } = PropTypes;

export const propTypes = {
  x: string.isRequired,
};

export const defaultProps = {
  x: '',
};
