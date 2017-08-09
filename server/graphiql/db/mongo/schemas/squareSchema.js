const Schema = require('mongoose').Schema;

export const ObjectId = Schema.Types.ObjectId;
const squareSchema = new Schema({
  billingInfo: {
    nameOnCard: { type: String, required: true },
    last4: { type: String, required: true },
    amount: { type: String, required: true },
    email: { type: String, required: true },
  },
  locationId: { type: String, required: true },
  transactionId: { type: ObjectId, ref: Transaction },
}, {
  bufferCommands: true,
});
export default squareSchema;
/* Schema Breakdown.
  "leads": Leads is an array of all the leads in the LoneSmoke database.

  "tags": Tags is the an array of all the existing tags currently in existence.
  - name: The name of the tag. e.g. "!beachDiscount"
  - description: The details behind why the tag exists and it's purpose. e.g. "This customer signed up to receive a 10% discount from Zushi Beach".
  - date: The date that this tag was created.
*/
