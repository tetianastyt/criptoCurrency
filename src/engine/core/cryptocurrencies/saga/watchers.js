import { all, call, takeEvery} from 'redux-saga/effects'
import { GET_ALL_RATES_ASYNC } from './asyncTYpes'
import { callGetRatesWorker } from './worker/getRates'

function* watchGetRates() {
    yield takeEvery(GET_ALL_RATES_ASYNC, callGetRatesWorker);
}
/*function* watchGetBTCRates() {
    yield takeEvery(GET_BTC_RATES_ASYNC, callGetBTCRatesWorker);
}
function* watchGetETHRates() {
    yield takeEvery(GET_ETH_RATES_ASYNC, callGetETHRatesWorker);
}
function* watchGetXRPRates() {
    yield takeEvery(GET_XRP_RATES_ASYNC, callGetXRPRatesWorker);
}*/


export function* currenciesWatcher () {
    yield all([
        call(watchGetRates),
        /*call(watchGetBTCRates),
        call(watchGetETHRates),
        call(watchGetXRPRates)*/
    ])
}