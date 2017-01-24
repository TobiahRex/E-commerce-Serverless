import mongoose from 'mongoose';

const thingSchema = new mongoose.Schema({
  name: String,
});

const Thing = mongoose.model('Thing', thingSchema);

// -----------------------------------------------------------------------------
export default Thing;
