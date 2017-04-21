/* eslint-disable no-constant-condition */
import { call, take, put, select } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import generateMobileTitle from './generateMobileTitle';
import { createTaxAPI } from '../../services/api/taxes';
import sessionActions from '../../redux/session';
import orderActions from '../../redux/orders';
import apiActions from '../../redux/api';

function* cleanS3Route() {
  const { locationBeforeTransitions } = yield select('routing');
  const hash = locationBeforeTransitions.hash;
  const path = (/#!(\/.*)$/.exec(hash) || [])[1];

  if (path) {
    console.warn('#! = true: ', path);
    replace(path);
  } else if (/^#access_token.*/.test(hash)) {
    console.warn('#access_token = true: ', hash);
    // replace(`/login/${hash}`);
  }
  console.error('cleanS3Route did not clean anything');
}
function* createMobileTitle() {
  const { title, url } = yield call(() => generateMobileTitle());
  yield put(sessionActions.saveActivePage(title, url));
}
function* getTaxRateAsynch() {
  const taxApi = createTaxAPI();
  const response = yield call(() => taxApi.getTaxRate());
  if (response.ok) {
    const taxRate = {
      stateRate: response.data.rates[0].rate / 100,
      cityRate: response.data.rates[1].rate / 100,
      totalRate: response.data.totalRate / 100,
    };
    yield [put(orderActions.setTaxRate(taxRate)),
      put(apiActions.apiSuccess())];
  } else {
    yield [put(apiActions.apiFail(response.data))];
  }
}

function* startupActions() {
  const results = yield [
    call(cleanS3Route),
    call(createMobileTitle),
    call(getTaxRateAsynch),
  ];
  yield put({ type: 'APP_STARTUP_COMPLETE', payload: results });
}

export default function* startup() {
  while (true) {
    yield take('APP_STARTUP');
    yield call(startupActions);
  }
}
