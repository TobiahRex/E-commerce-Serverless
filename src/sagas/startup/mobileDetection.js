import { put, call } from 'redux-saga/effects';
import MobileDetect from 'mobile-detect';
import mobileActions from '../../redux/mobile';

const windowPromise = () => new Promise((resolve) => {
  window.addEventListener('orientationchange', (screenResults) => {
    const screen = screenResults;
    window.removeEventListener('orientationchange');
    resolve(screen);
  });
});

export default function* mobileDetection() {
  const mobileDevice = new MobileDetect(window.navigator.userAgent);
  const type = mobileDevice.mobile();
  yield put(mobileActions.setMobileDevice(type));

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
