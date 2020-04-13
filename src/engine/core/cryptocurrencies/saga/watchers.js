import { all, call, takeEvery} from 'redux-saga/effects'
import { GET_ALL_RATES_ASYNC } from './asyncTYpes'
import { callGetRatesWorker } from './worker/getRates'

function* watchGetRates() {
    yield takeEvery(GET_ALL_RATES_ASYNC, callGetRatesWorker);
}

export function* currenciesWatcher () {
    yield all([
        call(watchGetRates),
    ])
}
