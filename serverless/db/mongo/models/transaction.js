/* eslint-disable no-use-before-define, no-console */
import { Promise as bbPromise } from 'bluebird';
import transactionSchema from '../schemas/transactionSchema';

export default (db) => {
  transactionSchema.statics.createTransaction = txn =>
  new Promise((resolve, reject) => {
    bbPromise.fromCallback(cb => Transaction.create(txn, cb))
    .then((newTransaction) => {
      console.log(`Successfully created new Transaction. ${newTransaction}.`);
      resolve(newTransaction);
    })
    .catch((error) => {
      console.log(`Error trying to create new Transaction.  ERROR = ${error}`);
      reject(`Error trying to create new Transaction.  ERROR = ${error}`);
    });
  });

  const Transaction = db.model('Transaction', transactionSchema);
  return Transaction;
};
