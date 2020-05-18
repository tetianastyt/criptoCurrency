import { all, call, takeEvery } from 'redux-saga/effects';
import { GET_ALL_RATES_ASYNC } from './asyncTYpes';
import { callGetRatesPeriodicallyWorker } from './worker/getRates';

function* watchGetRates() {
  yield takeEvery(GET_ALL_RATES_ASYNC, callGetRatesPeriodicallyWorker);
}

export function* currenciesWatcher() {
  yield all([
    call(watchGetRates),
  ])
}
