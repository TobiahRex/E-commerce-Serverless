import _ from 'lodash';

/**
* Function: "arrayDeepEquality"
* 1) Expects to be used inside a React's 
*/
const arrayDeepEquality = (np, tp) => _(np).differenceWith(tp, _.isEqual).isEmpty();

export default arrayDeepEquality;
