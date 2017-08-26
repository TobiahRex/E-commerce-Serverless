import moment from 'moment';

export default function getShippingDay() {
  const today = moment().format('dddd');

  switch (today) {
    case 'Monday': return moment().add(1, 'days').format('YYYY/MM/DD');
    case 'Tuesday': return moment().add(1, 'days').format('YYYY/MM/DD');
    case 'Wednesday': return moment().add(1, 'days').format('YYYY/MM/DD');
    case 'Thursday': return moment().add(1, 'days').format('YYYY/MM/DD');
    case 'Friday': return moment().add(3, 'days').format('YYYY/MM/DD');
    case 'Saturday': return moment().add(2, 'days').format('YYYY/MM/DD');
    case 'Sunday': return moment().add(1, 'days').format('YYYY/MM/DD');
    default: return moment().add(1, 'days').format('YYYY/MM/DD');
  }
}
