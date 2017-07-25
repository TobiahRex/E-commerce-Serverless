const Schema = require('mongoose').Schema;

export const ObjectId = Schema.Types.ObjectId;
const marketHeroSchema = new Schema({
  lead: {
    email: { type: String, required: true },
    date: { type: Date, default: Date.now },
    firstName: { type: String, default: 'John' },
    lastName: { type: String, default: 'Doe' },
  },
  tags: [{
    name: { type: String },
    description: { type: String },
    date: { type: Date },
  }],
}, {
  bufferCommands: true,
});
export default marketHeroSchema;
/* Schema Breakdown.
  "leads": Leads is an array of all the leads in the LoneSmoke database.

  "tags": Tags is the an array of all the existing tags currently in existence.
  - name: The name of the tag. e.g. "!beachDiscount"
  - description: The details behind why the tag exists and it's purpose. e.g. "This customer signed up to receive a 10% discount from Zushi Beach".
  - date: The date that this tag was created.
*/
