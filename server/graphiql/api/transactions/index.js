/* eslint-disable no-console */

import express from 'express';
import Transaction from '../../db/mongo/models/transaction';

const router = new express.Router();

router.post('/squareChargeCard', (req, res) => {
  Transaction.squareChargeCard(req.body)
  .then(() => res.status(200).send())
  .catch(error => res.status(400).send(error));
});

router.post('/issueUserRefund', (req, res) => {
  Transaction.issueUserRefund(req.body)
  .then(() => res.status(200).send('Refund has been issued.'))
  .catch(error => res.status(400).send(error.message));
});
export default router;
