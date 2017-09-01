import moment from 'moment';

export default function getDate() {
  return moment().format('YYYY/MM/DD');
}
