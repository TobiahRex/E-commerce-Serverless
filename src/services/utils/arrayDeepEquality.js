import _ from 'lodash';

/**
* Function: "arrayDeepEquality"
* 1) Expects to be used inside a React's lifecycle method "componentWillReceiveProps";  Evaluates "nextProps" to "this.props".
* 2) If a difference is found, it returns true, otherwise, false.
*
* @param {object} np (nextProps) - The "nextProps" given inside React's lifecycle componentWillReceiveProps.
* @param {object} tp (this.props) - value when calling "this.props" inside a React class component.
*/
const arrayDeepEquality = (np, tp) => _(np).differenceWith(tp, _.isEqual).isEmpty();

export default arrayDeepEquality;
