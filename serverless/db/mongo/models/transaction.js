/* eslint-disable no-use-before-define */
import { db } from '../connection';
import { transactionSchema } from '../schemas/transactionSchema';

transactionSchema.statics.createTransaction = (txn, cb) => {
  Transaction.create(txn)
  .then(dbTxn => cb(null, dbTxn))
  .catch(err => cb({ problem: 'Could not create Transaction.', error: err }, null));
};
const Transaction = db.model('Transaction', transactionSchema);
export default Transaction;
