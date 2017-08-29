import { getDate as GetDate } from './helpers';

const Schema = require('mongoose').Schema;

export const ObjectId = Schema.Types.ObjectId;

const contactSchema = new Schema({
  documentType: {
    type: String,
    enum: [
      'contactUs',
      'cronJobReport',
      'errorReport',
    ],
    required: true,
  },
  contactUs: {
    created: { type: Date, default: Date.now },
    userId: { type: ObjectId, ref: 'User' },
    name: { type: String, required: true },
    emailAddress: { type: String, required: true },
    message: { type: String, required: true },
    messageId: { type: String },
  },
  cronJobReport: {
    created: { type: Date, default: GetDate },
    messageId: { type: String, default: '' },
    reports: [{
      date: { type: String, default: GetDate },
      success: {
        type: Boolean,
        enum: [true, false],
        default: false,
      },
      userId: { type: ObjectId, ref: 'User' },
      sagawaId: { type: ObjectId, ref: 'Sagawa' },
      error: { type: String, default: '' },
    }],
  },
  errorReport: {
    created: { type: String, default: GetDate },
    messageId: { type: String, default: '' },
    sourceEvent: { type: String, default: '' },
    message: { type: String, default: '' },
  },
}, {
  bufferCommands: true,
});
export default contactSchema;
