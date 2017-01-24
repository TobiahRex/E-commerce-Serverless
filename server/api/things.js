import express from 'express';
import Thing from '../db/Thing';

const router = new express.Router();

// -----------------------------------------------------------------------------
router.get('/:thingId', (req, res) =>
Thing.findById(req.params.thingId, res.handle));

// -----------------------------------------------------------------------------
router.route('/:thingId')
  .get((req, res) =>
  Thing.findById(req.params.thingId, res.handle))
  .put((req, res) =>
  Thing.findByIdAndUpdate(req.params.thingId, req.body, { new: true }, res.handle))
  .delete((req, res) =>
  Thing.findByIdAndRemove(req.params.thingId, res.handle));

// -----------------------------------------------------------------------------
router.route('/')
  .get((req, res) =>
  Thing.find({}, res.handle))
  .post((req, res) =>
  Thing.create(req.body, res.handle));

// -----------------------------------------------------------------------------
export default router;
