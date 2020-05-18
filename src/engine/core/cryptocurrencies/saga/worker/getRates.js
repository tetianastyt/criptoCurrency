import { put, call, select, delay } from 'redux-saga/effects';
import { actions } from '../../actions';
import { isLoadingSelector } from '../../selectors';
import Api from '../../../../services/api/index';

function* callGetRatesWorker() {
  const isLoading = yield select(isLoadingSelector);

  if (!isLoading) {
    yield put(actions.setIsLoading(true));
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
      yield put(actions.setAllExchangeRates(rates));
    }
  } catch (err) {
    yield put(actions.setError(err));
  }
  yield put(actions.setIsLoading(false));
}

export function* callGetRatesPeriodicallyWorker() {
  while (true) {
    yield call(callGetRatesWorker);
    yield delay(intervalInSeconds);
  }
}

const intervalInSeconds = 1000 * 60 * 3; //3 mins
