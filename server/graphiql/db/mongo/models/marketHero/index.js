/* eslint-disable no-use-before-define, no-console, import/newline-after-import */
import axios from 'axios';
import { Promise as bbPromise } from 'bluebird';
import marketHeroSchema from '../../schemas/marketHeroSchema';
import db from '../../connection';
require('dotenv').load({ silent: true });

/**
* 1) Determines if "lead" (email) is already saved to MarketHero collection.
*
* @param string userEmail - Email data.
*
* @return {object} - Promise: resolved - user info if found || nothing if not found.
*/
marketHeroSchema.statics.checkForLead = userEmail =>
new Promise((resolve, reject) => {
  MarketHero.findOne({ 'lead.email': userEmail })
  .exec()
  .then(resolve)
  .catch(reject);
});

/**
* 1) Determines whether @param "tag" is an array or single string.
* 2) Creates a tagInfo array, populates with "language" and "tag". (Langauge because we need to know immediately upon creating the lead for the first time, what language they speak for analytics purposes)
* 3) create request body for MarketHero API.
* 4) Send POST request with data.
* 5) Resolve || Reject with MarketHero response.
*
* @param string userEmail - Email data.
* @param string || [array] tag -  Tag data || Tags Data.
*
* @return {object} - Promise: resolved - no data.
*/
marketHeroSchema.statics.createOrUpdateLead = (userEmail, language, tag) =>
new Promise((resolve, reject) => {
  if (!userEmail || !language || !tag) {
    console.log('Missing required arguments at "createOrUpdateLead".');
    reject('Missing required arguments at "createOrUpdateLead"');
  } else {
    let tagInfo = [];

    if (Array.isArray(tag)) tagInfo = [...tag, language];
    else tagInfo = [tag, language];

    const reqBody = {
      apiKey: process.env.MARKET_HERO_API_KEY,
      firstName: 'John',
      lastName: 'Doe',
      email: userEmail,
      tags: tagInfo // eslint-disable-line
    };
    axios.post('https://api.markethero.io/v1/api/tag-lead', reqBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      if (res.status !== 200) {
        console.log(`Market Hero API Error:  Cannot update lead# ${userEmail}; Response: "${res.data}".  `);
        return reject(`Error posting to Market Hero.  ERROR = ${res.data}`);
      }
      console.log('\nSuccessfully posted to Market Hero: \nMarket Hero response: ', res.data);
      return resolve(`Successfully posted to Market Hero: \nMarket Hero response: ${res.data}`);
    })
    .catch((error) => {
      console.log('\nError trying to save LEAD to MarketHero: ', error);
      return reject(`Error trying to save LEAD to MarketHero.  ERROR = ${error}`);
    });
  }
});

/**
* 1) Determines whether @param "tag" is an array or single string and formats "tagInfo" accordingly.
* 2) Creates new MarketHero document in local db.
* 3) Resolves || Rejects result.
*
* @param {string} userEmail - Email data.
* @param {string || array} tag - Tag data.
*
* @return {object} - Promise: resolved - no data.
*/
marketHeroSchema.statics.createMongoLead = (userEmail, language, tag) =>
new Promise((resolve, reject) => {
  if (!userEmail || !language || !tag) {
    console.log('Missing required arguments at "createMongoLead".');
    reject('Missing required arguments at "createMongoLead"');
  } else {
    let tagInfo = null;

    if (Array.isArray(tag)) tagInfo = [...tag, { name: language, description: `This user speaks ${language}.` }];

    else tagInfo = [tag, { name: language, description: `This user speaks ${language}` }];

    bbPromise.fromCallback(cb => MarketHero.create({
      lead: { email: userEmail },
      tags: Array.isArray(tagInfo) ? [...tagInfo] : [tagInfo],
    }, cb))
    .then((newLead) => {
      console.log(`Created New lead in MONGO MarketHero collection. Results: ${newLead}`);
      return resolve(newLead);
    })
    .catch((error) => {
      console.log(`Error trying to save LEAD to MONGO MarketHero Collection.  ERROR = ${error}`);
      return reject(`Error trying to save LEAD to MONGO MarketHero Collection.  ERROR = ${error}`);
    });
  }
});

/**
* 1) Locates MarketHero Document in local DB using input argument "userEmail".
* 2) If found - updates Document's "tags" array with input argument "tag".
* 3) Saves the updated Document.
* 4) Resolve || Rejects the result.
*
* @param {string} userEmail - Email data.
* @param {string || array} tag - Tag data.
*
* @return {object} - Promise: resolved - no data.
*/
marketHeroSchema.statics.updateMongoLead = (userEmail, tag) =>
new Promise((resolve, reject) => {
  if (!userEmail || !tag) {
    console.log('Missing required arguments at "updateMongoLead".');
    reject('Missing required arguments at "updateMongoLead"');
  } else {
    let tagInfo = null;

    if (Array.isArray(tag)) tagInfo = [...tag];
    else tagInfo = [tag];

    MarketHero
    .findOne({ 'lead.email': userEmail })
    .exec()
    .then((dbLead) => {
      console.log(`Found lead in MONGO MarketHero collection. Results: ${dbLead}`);
      dbLead.tags = dbLead.tags.concat(tagInfo);
      return dbLead.save({ new: true });
    })
    .then((savedLead) => {
      console.log(`Successfully updated Lead: ${savedLead}`);
      return resolve(`Successfully updated Lead: ${savedLead}`);
    })
    .catch((error) => {
      console.log(`Error trying to update LEAD to Mongo Database.  ERROR = ${error}`);
      return reject(`Error trying to update LEAD to Mongo Database.  ERROR = ${error}`);
    });
  }
});

const MarketHero = db.model('MarketHero', marketHeroSchema);
