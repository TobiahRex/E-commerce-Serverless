/* eslint-disable no-use-before-define, no-console, import/newline-after-import */
import axios from 'axios';
// import { Promise as bbPromise } from 'bluebird';
import squareSchema from '../../schemas/squareSchema';
import db from '../../connection';
require('dotenv').load({ silent: true });

squareSchema.statics.fetchLocation = () =>
new Promise((resolve, reject) => {
  axios({
    method: 'get',
    url: 'https://connect.squareup.com/v2/locations',
    headers: { Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}` },
  })
  .then((response) => {
    console.log('Received locations from Square: ', response.data);
  })
  .catch((error) => {
    console.log('Error while fetching location from Square.  Error = ', error);
    reject(`Error while fetching location from Square.  Error =  ${error}`);
  });
});

const Square = db.model('Square', squareSchema);
