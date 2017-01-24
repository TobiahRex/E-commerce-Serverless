import express from 'express';
import things from './things';

const router = new express.Router();

router.use('/things', things);

export default router;
