export default function checkForToast(toast) {
  if (typeof toast !== 'object') {
    return ({
      type: '',
      message: '',
    });
  }

  return Object.keys(toast).reduce((a, n) => {
    if ((n !== 'message') && toast[n]) {
      a.type = n;
      a.message = toast.message;
      return a;
    }
    return a;
  }, {});
}
