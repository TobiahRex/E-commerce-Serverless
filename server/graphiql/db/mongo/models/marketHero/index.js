/* eslint-disable no-use-before-define, no-console, import/newline-after-import */
import axios from 'axios';
import { Promise as bbPromise } from 'bluebird';
import marketHeroSchema from '../../schemas/marketHeroSchema';
import db from '../../connection';
require('dotenv').load({ silent: true });

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
  console.log('@MarketHero.checkForLead\n\n');

  MarketHero.findOne({ 'lead.email': userEmail })
  .exec()
  .then((mhDoc) => {
    console.log('\nSUCCEEDED: MarketHero.checkForLead: ', mhDoc);
    resolve(mhDoc);
  })
  .catch((error) => {
    console.log('\nFAILED: MarketHero.checkForLead: ', error);
    reject(new Error(error.message));
  });
});

marketHeroSchema.statics.updateLeadProductTags = ({ lead, productTags }) =>
new Promise((resolve, reject) => {
  console.log('\n\n@MarketHero.updateProductTags\n');

  function recursiveUpload(tags) {
    const savedTags = tags;
    let nextTag = [];

    if (savedTags.length) {
      nextTag = [savedTags.pop()];

      const reqBody = {
        apiKey: process.env.MARKET_HERO_API_KEY,
        tags: nextTag,
        email: lead.email,
        lastName: lead.familyName,
        firstName: lead.givenName,
      };

      axios.post('https://api.markethero.io/v1/api/tag-lead', reqBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status !== 200) {
          console.log('\nFAILED: @Markethero.updateUserTags >>> axios.post: ', response.data);
          reject(response.data.error);
        } else {
          console.log('\nSUCCEEDED: @Markethero.updateUserTags >>> axios.post: ', response.data);

          console.log('\nSUCCEEDED: @MarketHero.updateLeadProductTags >>> axios.post - calling recursively with remaining tags: ', savedTags);
          recursiveUpload(savedTags);
        }
      })
      .catch((error) => {
        console.log('\nFAILED: @MarketHero.udateUserTags >>> axios.post: ', error);
        reject(new Error(error.message));
      });
    } else {
      console.log('\nSUCCEEDED: @MarketHero.updateLeadProductTags >>> recursive update - Finished all product tag updates.');
      resolve();
    }
  }
  recursiveUpload(productTags);
});


marketHeroSchema.statics.updateUserTags = reqBody =>
new Promise((resolve, reject) => {
  console.log('\n@Markethero.updateLeadTags');

  axios.post('https://api.markethero.io/v1/api/tag-lead', reqBody, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    if (response.status !== 200) {
      console.log('\nFAILED: @Markethero.updateUserTags >>> axios.post: ', response.data);
      reject(response.data.error);
    } else {
      console.log('\nSUCCEEDED: @Markethero.updateUserTags >>> axios.post: ', response.data);
      resolve();
    }
  })
  .catch((error) => {
    console.log('\nFAILED: @MarketHero.udateUserTags >>> axios.post: ', error);
    reject(new Error(error.message));
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
marketHeroSchema.statics.createOrUpdateLead = ({ lead, userTags, productTags }) =>
new Promise((resolve, reject) => {
  console.log('@MarketHero.createOrUpdateLead\n\n');

  if (!lead || !userTags) {
    console.log('\nFAILED: Missing required arguments @ "createOrUpdateLead".');
    reject('Missing required arguments @ "createOrUpdateLead"');
  } else {
    const reqBody = {
      apiKey: process.env.MARKET_HERO_API_KEY,
      tags: userTags,
      email: lead.email,
      lastName: lead.familyName,
      firstName: lead.givenName,
    };

    MarketHero.updateUserTags(reqBody)
    .then(() => { //eslint-disable-line
      console.log('\nSUCCEEDED: @MarketHero.createOrUpdateLead >>> MarketHero.udpateUserTags');

      if (!productTags.length) {
        resolve();
      } else {
        return MarketHero.updateLeadProductTags({
          lead: {
            email: lead.email,
            lastName: lead.familyName,
            firstName: lead.givenName,
          },
          productTags,
        })
        .then(() => {
          console.log('\nSUCCEEDED: @MarketHero.createOrUpdateLead >>> MarketHero.updateLeadProductTags');
          return resolve('Success!');
        })
        .catch(console.log);
      }
    })
    .catch((error) => {
      console.log('\nFAILED: MarketHero.createOrUpdateLead: ', error);
      return reject(error.message);
    });
  }
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
  console.log('@MarketHero.createMongoLead\n\n');

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
  console.log('@MarketHero.updateMongoLead\n\n');

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
export default MarketHero;
