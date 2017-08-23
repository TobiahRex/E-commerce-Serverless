/* eslint-disable no-use-before-define, no-console */
import complaintSchema from '../schemas/complaintSchema';

export default (db) => {
  const Complaint = db.model('Complaint', complaintSchema);
  return Complaint;
};
