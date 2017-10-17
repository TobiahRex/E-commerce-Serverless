// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  const evt = e || window.event;
  if (evt.preventDefault) {
    evt.preventDefault();
    evt.returnValue = false;
  }
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
  return 1;
}

function disableScroll() {
  if (window.addEventListener) {
    // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
  }
}

function enableScroll() {
  if (window.removeEventListener) {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }
}

export default ({
  disableScroll,
  enableScroll,
});
