import React, { PropTypes, PureComponent } from 'react';
import {
  Card,
  CardHeader,
  CardText,
  CardActions,
  RaisedButton,
} from 'material-ui';

export default class muiCard extends PureComponent {
  static propTypes = {
    thing: PropTypes.string,
  }
  render() {
    return (
      <Card>
        <CardHeader title="Card Template" subtitle="reusable component" />
        <CardText>
          Props: { this.props.thing || "'empty'" }
        </CardText>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </CardText>
        <CardActions>
          <RaisedButton label="Button 1" primary />
          <RaisedButton label="Button 2" secondary />
        </CardActions>
      </Card>
    );
  }
}
