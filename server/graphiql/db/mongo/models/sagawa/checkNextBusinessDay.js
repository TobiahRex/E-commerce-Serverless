import moment from 'moment';

export default function returnNextBusinessDay() {
  const today = moment().format('dddd');

  switch (today) {
    case 'Monday': return moment().add(3, 'days').format('YYYY/MM/DD');
    case 'Tuesday': return moment().add(3, 'days').format('YYYY/MM/DD');
    case 'Wednesday': return moment().add(3, 'days').format('YYYY/MM/DD');
    case 'Thursday': return moment().add(3, 'days').format('YYYY/MM/DD');
    case 'Friday': return moment().add(6, 'days').format('YYYY/MM/DD');
    case 'Saturday': return moment().add(5, 'days').format('YYYY/MM/DD');
    case 'Sunday': return moment().add(4, 'days').format('YYYY/MM/DD');
    default: return moment().add(3, 'days').format('YYYY/MM/DD');
  }
}
