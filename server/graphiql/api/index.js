/* eslint-disable no-console */
import express from 'express';
import marketHeros from './marketHeros';
import sagawas from './sagawas';
import contacts from './contacts';
import transactions from './transactions';

const router = new express.Router();

router.use('/sagawa', sagawas);
router.use('/marketHero', marketHeros);
router.use('/email', marketHeros);
router.use('/transaction', transactions);
router.use('/contact', contacts);

export default router;
