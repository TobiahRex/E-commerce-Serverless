/* eslint-disable no-use-before-define */
import db from '../connection';
import transactionSchema from '../schemas/transactionSchema';

transactionSchema.statics.createTransaction = (txn, cb) => {
  Transaction.create(txn)
  .then(dbTxn => cb(null, dbTxn))
  .catch(error => cb({ problem: 'Could not create Transaction.', error }));
};
const Transaction = db.model('Transaction', transactionSchema);
export default Transaction;
