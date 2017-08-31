import { getDate as GetDate } from './helpers';

const Schema = require('mongoose').Schema;

export const ObjectId = Schema.Types.ObjectId;

const reportSchema = new Schema({
  reportType: {
    type: String,
    enum: [
      'cronJobError',
      'cronJobSummary',
      'cronJobEmpty',
    ],
    default: '',
    required: true,
  },
  created: { type: Date, default: GetDate },
  messageId: { type: String, default: '' },
  mainTitle: { type: String, default: '', required: true },
  subTitle: { type: String, default: '', required: true },
  headerBlurb: { type: String, default: '' },
  data: {},
}, {
  bufferCommands: true,
});
export default reportSchema;
