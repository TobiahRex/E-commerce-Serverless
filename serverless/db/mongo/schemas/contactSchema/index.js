import { getDate as GetDate } from './helpers';

const Schema = require('mongoose').Schema;

export const ObjectId = Schema.Types.ObjectId;

const contactSchema = new Schema({
  created: { type: String, default: GetDate },
  userId: { type: ObjectId, ref: 'User' },
  name: { type: String, required: true },
  emailAddress: { type: String, required: true },
  message: { type: String, required: true },
  messageId: { type: String },
}, {
  bufferCommands: true,
});
export default contactSchema;
