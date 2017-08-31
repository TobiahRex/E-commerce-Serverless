/* eslint-disable no-console */
import express from 'express';
import MarketHero from '../../db/mongo/models/marketHero';

const router = new express.Router();

router.post('/createOrUpdateLead', (req, res) => {
  console.log('req.body: ', req.body);
  MarketHero.createOrUpdateLead(req.body)
  .then(() => res.status(200).send('Success!'))
  .catch((error) => {
    console.log('\nFAILED: Upload Sagawa and Send Invoice Email: ', error);
    res.status(400).send(error);
  });
});

export default router;
