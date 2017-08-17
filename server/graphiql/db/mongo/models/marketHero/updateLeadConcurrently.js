/* eslint-disable no-console, import/imports-first */

/**
* 1a) Concurrently call MarketHero API and udpate lead with new tags.
* 1b) Concurrently call MarketHero Mongo Collection update method.
*
* @param {instance} marketHeroModel - Mongo model instance.
* @param {string} langauge - req language.
* @param {string} email - users email.
* @param {object} tagInfo - { name, description }.
*
* @return [{object}] - Promises: resolved.
*/
const udpateLeadConcurrently = (marketHeroModel, language, email, tagInfo) => Promise.all([
  marketHeroModel.createOrUpdateLead(email, language, tagInfo.name),
  marketHeroModel.updateMongoLead(email, tagInfo),
]);

export default udpateLeadConcurrently;
