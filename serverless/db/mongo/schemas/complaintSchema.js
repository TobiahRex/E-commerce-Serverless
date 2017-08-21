const Schema = require('mongoose').Schema;

const complaintSchema = new Schema({
  email: { type: String, required: true },
  created: { type: Date, default: Date.now },
  messageId: { type: String, required: true },
}, {
  bufferCommands: true,
});
export default complaintSchema;
