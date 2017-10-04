import m from 'moment';

const 

export default (htmlBody) => {
  htmlBody
  .replace(/DATE_HERE/g, m().format('LL'))
  .replace(//g,)
}
