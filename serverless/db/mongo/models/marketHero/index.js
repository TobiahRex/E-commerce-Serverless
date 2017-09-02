/* eslint-disable no-use-before-define, no-console, import/newline-after-import */
import axios from 'axios';
import { Promise as bbPromise } from 'bluebird';
import marketHeroSchema from '../../schemas/marketHeroSchema';
require('dotenv').load({ silent: true });

export default (db) => {
  /**
  * Function: "checkForLead"
  * 1) Determines if "lead" (email) is already saved to MarketHero collection.
  *
  * @param string userEmail - Email data.
  *
  * @return {object} - Promise: resolved - user info if found || nothing if not found.
  */
  marketHeroSchema.statics.checkForLead = userEmail =>
  new Promise((resolve, reject) => {
    console.log('\n\n@MarketHero.checkForLead\n');

    MarketHero.findOne({ 'lead.email': userEmail })
    .exec()
    .then((mhDoc) => {
      console.log('\nSUCCEEDED: MarketHero.checkForLead: ', mhDoc);
      resolve(mhDoc);
    })
    .catch((error) => {
      console.log('\nFAILED: MarketHero.checkForLead: ', error);
      reject(new Error('\nFAILED: MarketHero.checkForLead: '));
    });
  });

  /**
  * Function: "createOrUpdateLead"
  * Sends Customer data and a list of tags to the Market Hero API.
  * 1) Verifies input arguments exist.
  * 2) Creates request body for MarketHero API.
  * 3) Send POST request with data.
  * 4) Resolve || Reject with MarketHero response.
  *
  * @param {object} transactionInfo - 1) {object} lead: lead information. 2) {array} tags: individual strings representing a tag.
  *
  * @return {object} - Promise: resolved - no data.
  */
  marketHeroSchema.statics.createOrUpdateLead = ({ lead, tags }) =>
  new Promise((resolve, reject) => {
    console.log('\n\n@MarketHero.createOrUpdateLead\n');

    if (!lead || !tags) {
      console.log('\nFAILED: Missing required arguments @ "createOrUpdateLead".');
      reject(new Error('\nFAILED: Missing required arguments @ "createOrUpdateLead"'));
    }

    const reqBody = {
      apiKey: process.env.MARKET_HERO_API_KEY,
      tags,
      email: lead.email,
      lastName: lead.familyName,
      firstName: lead.givenName,
    };

    axios.post('https://api.markethero.io/v1/api/tag-lead', reqBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      if (res.status !== 200) {
        console.log('\nFAILED; Market Hero Upload: ', res.data);
        return reject(new Error('FAILE: Market Hero Upload: '));
      }

      console.log('\nSUCCEEDED: Market Hero Upload:', res.data);
      return resolve('\nSUCCEEDED: Posted to Market Hero.');
    })
    .catch((error) => {
      console.log('\nFAILED: MarketHero.createOrUpdateLead: ', error);
      return reject(new Error('\nFAILED: MarketHero.createOrUpdateLead.'));
    });
  });

  /**
  * Function: "createMongoLead"
  * 1) Determines whether @param "tag" is an array or single string and formats "tagInfo" accordingly.
  * 2) Creates new MarketHero document in local db.
  * 3) Resolves || Rejects result.
  *
  * @param {string} userEmail - Email data.
  * @param {string || array} tag - Tag data.
  *
  * @return {object} - Promise: resolved - no data.
  */
  marketHeroSchema.statics.createMongoLead = ({ lead, tags }) =>
  new Promise((resolve, reject) => {
    console.log('\n\n@MarketHero.createMongoLead\n');

    if (!lead || !tags) {
      console.log('\nFAILED: Missing Required arguments @ MarketHero.createMongoLead.');
      reject(new Error('\nFAILED: Missing Required arguments @ MarketHero.createMongoLead: '));
    }

    bbPromise.fromCallback(cb => MarketHero.create({ lead, tags }, cb))
    .then((newLead) => {
      console.log('\nSUCCEEDED: Create Mongo Market Hero Document: ', newLead);
      return resolve(newLead);
    })
    .catch((error) => {
      console.log('\nFAILED: Create Mongo Market Hero Document: ', error);
      return reject(new Error('\nFAILED: Create Mongo Market Hero Document:'));
    });
  });

  /**
  * Function: "updateMongoLead"
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
  marketHeroSchema.statics.updateMongoLead = ({ lead, tags }) =>
  new Promise((resolve, reject) => {
    console.log('\n\n@MarketHero.updateMongoLead\n');

    if (!lead || !tags) {
      console.log('\nFAILED: Missing Required arguments @ MarketHero.createMongoLead.');
      reject(new Error('\nFAILED: Missing Required arguments @ MarketHero.createMongoLead: '));
    }

    MarketHero
    .findOne({ 'lead.email': lead.email })
    .exec()
    .then((dbLead) => {
      console.log('\nSUCCEEDED: Found lead: ', dbLead);
      dbLead.language = lead.language;
      dbLead.givenName = lead.givenName;
      dbLead.familyName = lead.familyName;
      dbLead.tags = [...dbLead.tags, ...tags];
      return dbLead.save({ new: true });
    })
    .then((savedLead) => {
      console.log('\nSUCCEEDED: Updated Lead: ', savedLead);
      return resolve('\nSUCCEEDED: Updated Lead.');
    })
    .catch((error) => {
      console.log('\nFAILED: Updating LEAD to Mongo Database: ', error);
      reject(new Error('\nFAILED: Updating LEAD to Mongo Database: '));
    });
  });

  const MarketHero = db.model('MarketHero', marketHeroSchema);
  return MarketHero;
};
