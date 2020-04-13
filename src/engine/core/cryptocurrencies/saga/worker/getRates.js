import { put, call, select } from 'redux-saga/effects';
import { setAllExchangeRates, setError, setIsLoading } from '../../actions';
import { isLoadingSelector } from '../../selectors';
import Api from '../../../../services/api/index';

export function* callGetRatesWorker() {
    const isLoading = yield select(isLoadingSelector);

    if (!isLoading) {
        yield put(setIsLoading(true));
    }

    try {
        const response = yield call(Api.getExchangeRates);
        if (response && response.status >= 200 && response.status < 400) {
            const responseData = response.data;
            const rates = responseData.filter((item) => {
                return item.currency === 'btc' ||
                    item.currency === 'eth' ||
                    item.currency === 'xrp'
            });
            yield put(setAllExchangeRates(rates));
        }
    } catch (err) {
        yield put(setError(err));
    }
    yield put(setIsLoading(false));
}
