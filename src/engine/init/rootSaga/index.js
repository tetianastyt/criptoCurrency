import { all, call } from 'redux-saga/effects';

// Watchers
import { currenciesWatcher } from '../../core/cryptocurrencies/saga/watchers';

export function* rootSaga() {
    yield all([
        call(currenciesWatcher)
    ]);
}