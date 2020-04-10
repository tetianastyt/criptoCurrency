import {apply, put, call, select} from 'redux-saga/effects'
import {setAllExchangeRates, setError, setIsLoading} from '../../actions'
import Api from '../../../../services/api/index';

export function* callGetRatesWorker() {
    const isLoading = yield select(state => state.cryptocurrencies.isLoading);
    if (!isLoading) yield put(setIsLoading(true));

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
    /*try {
        const response = yield call(Api.getBTCexchangeRate);
        if (response && response.status >= 200 && response.status < 400) {
            const responseData = response.data;
            rates.push(responseData);
            //yield put(setBTCexchangeRate(responseData));
        }
    } catch (err) {
        yield put(setError(err));
    }
    try {
        const response = yield apply(Api, Api.getETHexchangeRate, []);
        if (response && response.status >= 200 && response.status < 400) {
            const responseData = response.data;
            rates.push(responseData);
            //console.log(rates);
            //yield put(setETHexchangeRate(responseData));
        }
    } catch (err) {
        yield put(setError(err));
    }
    try {
        const response = yield apply(Api, Api.getXRPexchangeRate, []);
        if (response && response.status >= 200 && response.status < 400) {
            const responseData = response.data;
            rates.push(responseData);
            //yield put(setXRPexchangeRate(responseData))
        }
    } catch (err) {
        yield put(setError(err));
    }*/
    //yield put(setAllExchangeRates(rates));



/*
import {apply, put, call} from 'redux-saga/effects'
import {setBTCexchangeRate, setETHexchangeRate,
    setXRPexchangeRate, setAllExchangeRates} from '../../actions'
import Api from '../../../../services/api/index';

var rates = [];

export function* callGetRatesWorker() {
    yield put(setAllExchangeRates(rates))
}

export function* callGetBTCRatesWorker() {
    try {
        const response = yield call(Api.getBTCexchangeRate);
        if (response && response.status >= 200 && response.status < 400) {
            const responseData = response.data;
            rates.push(responseData);
            yield put(setBTCexchangeRate(responseData));
        }
    } catch (err) {
        console.error(err)
    }
}
export function* callGetETHRatesWorker() {
    try {
        const response = yield apply(Api, Api.getETHexchangeRate, []);
        if (response && response.status >= 200 && response.status < 400) {
            const responseData = response.data;
            rates.push(responseData);
            //console.log(rates);
            yield put(setETHexchangeRate(responseData))
        }
    } catch (err) {
        console.error(err)
    }
}

export function* callGetXRPRatesWorker() {
    try {
        const response = yield apply(Api, Api.getXRPexchangeRate, []);
        if (response && response.status >= 200 && response.status < 400) {
            const responseData = response.data;
            //rates.push(responseData);
            yield put(setXRPexchangeRate(responseData))
        }
    } catch (err) {
        console.error(err)
    }
}*/
