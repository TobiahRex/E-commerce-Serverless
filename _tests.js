var nestedObj = { first: 'toby', last: 'rex', someArr: [ { other: 'thing' } ] };
var otherObj = nestedObj.first;
nestedObj = null;
console.log('otherObj: ', otherObj);
console.log('nestedObj: ', nestedObj);
