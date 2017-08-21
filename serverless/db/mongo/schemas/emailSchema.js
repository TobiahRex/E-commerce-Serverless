const Schema = require('mongoose').Schema;

export const ObjectId = Schema.Types.ObjectId;

const emailSchema = new Schema({
  type: { type: String, required: true },
  created: { type: Date, default: Date.now },
  purpose: { type: String, required: true },
  language: { type: String, required: true },
  replyToAddress: { type: String, required: true },
  subjectData: { type: String, required: true },
  subjectCharset: { type: String, default: 'utf8' },
  bodyHtmlData: { type: String, required: true },
  bodyHtmlCharset: { type: String, default: 'utf8' },
  bodyTextData: { type: String, requried: true },
  bodyTextCharset: { type: String, default: 'utf8' },
  sentEmails: [{
    messageId: { type: String },
    sesStatus: { type: String },
  }],
}, {
  bufferCommands: true,
});
export default emailSchema;
