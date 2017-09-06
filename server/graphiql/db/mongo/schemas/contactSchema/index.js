import { getDate as GetDate } from './helpers';

const Schema = require('mongoose').Schema;

export const ObjectId = Schema.Types.ObjectId;

const contactSchema = new Schema({
  error: {
    hard: {
      type: Boolean,
      default: false,
    },
    soft: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
  },
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
