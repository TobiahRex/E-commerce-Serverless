import moment from 'moment';

export default function returnNextBusinessDay() {
  const today = moment().format('dddd');

  switch(today) {
    case 'Monday': return 3;
    case 'Tuesday': return 3;
    case 'Wednesday': return 3;
    case 'Thursday': return 3;
    case 'Friday': return 5;
    case 'Saturday'
  }
}
