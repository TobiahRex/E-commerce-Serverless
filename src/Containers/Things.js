import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'material-ui';
import thingActions from '../Redux/ThingRedux';
import apiActions from '../Redux/ApiRedux';
import ThingList from '../Components/ThingList';
import InputNewThing from '../Components/InputNewThing';

const Things = ({ fetching,
  createThing,
  editThing,
  removeThing,
  things,
  apiStatus }) => {
  const propsThingList = {
    fetching,
    editThing,
    removeThing,
    things,
    apiStatus,
  };
  const propsInputNew = {
    fetching,
    createThing,
    apiStatus,
  };

  return (
    <Card>
      <CardHeader title="React Boilerplate" subtitle="MERN stack">
        <InputNewThing {...propsInputNew} />
      </CardHeader>
      <CardText>
        <ThingList {...propsThingList} />
      </CardText>
    </Card>
  );
};

Things.propTypes = {
  fetching: PropTypes.func.isRequired,
  createThing: PropTypes.func.isRequired,
  editThing: PropTypes.func.isRequired,
  removeThing: PropTypes.func.isRequired,
  things: PropTypes.arrayOf(PropTypes.any),
  apiStatus: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = ({ things, api }) => ({
  things,
  apiStatus: api,
});
const mapDispatchToProps = dispatch => ({
  fetching: () => dispatch(apiActions.fetching()),
  createThing: thingName => dispatch(thingActions.createThing(thingName)),
  removeThing: thingId => dispatch(thingActions.removeThing(thingId)),
  editThing: thing => dispatch(thingActions.editThing(thing)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Things);
