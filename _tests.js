const test = (str) => {
  switch (str) {
    case 'loginWithLine': return console.log('hi');
    case 'loginWithFacebook': return console.log('hi2');
    case 'loginWithGoogle': return console.log('h3');
    default: break;
  }
  return 0;
};

console.log(test('asdf'))
