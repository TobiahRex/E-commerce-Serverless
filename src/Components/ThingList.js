import React, { PropTypes } from 'react';
import uuid from 'uuid';
import Thing from './Thing';
import SnackBar from '../Components/ApiSnackBar';

const ThingList = ({ fetching, removeThing, editThing, things, apiStatus }) => {
  const eachThing = things.map((thing) => {
    const PROPS = {
      fetching,
      editThing,
      removeThing,
      apiStatus,
      data: thing,
    };
    return (<div key={uuid()}><Thing {...PROPS} /></div>);
  });

  return (
    <div>
      {eachThing}
      <SnackBar apiStatus={apiStatus} />
    </div>
  );
};
ThingList.propTypes = {
  fetching: PropTypes.func.isRequired,
  removeThing: PropTypes.func.isRequired,
  editThing: PropTypes.func.isRequired,
  things: PropTypes.arrayOf(PropTypes.any),
  apiStatus: PropTypes.objectOf(PropTypes.any),
};
export default ThingList;
