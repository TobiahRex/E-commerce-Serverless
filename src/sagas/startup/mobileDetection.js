/* eslint-disable no-console, no-constant-condition */
import { put, call, fork } from 'redux-saga/effects';
import MobileDetect from 'mobile-detect';
import mobileActions from '../../redux/mobile';

const windowPromise = () => new Promise((resolve) => {
  window.addEventListener('orientationchange', (screen) => {
    window.removeEventListener('orientationchange', () => console.info('Orienation event listener removed.'));

    resolve(screen);
  });
});

function* windowPromiseInit() {
  while (true) {
    const { orientation, height, width } = yield call(windowPromise);
    if (orientation) {
      yield put(mobileActions.orientationChanged({
        angle: orientation.angle,
        type: orientation.type,
        height,
        width,
      }));
    } else {
      yield put(mobileActions.orientationChanged({
        height,
        width,
        angle: null,
        type: null,
      }));
    }
  }
}

export default function* mobileDetection() {
  const mobileDevice = new MobileDetect(window.navigator.userAgent);
  const type = mobileDevice.mobile();
  const screenSize = String(window.screen.width);
  yield [
    put(mobileActions.setMobileDevice(type)),
    put(mobileActions.setScreenWidth(screenSize)),
    fork(windowPromiseInit),
  ];
}
