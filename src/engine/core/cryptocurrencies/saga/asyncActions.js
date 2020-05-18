import * as asyncTypes from './asyncTYpes';
import { actionCreator } from '../../../../helpers/actionCreator';

export const asyncActions = Object.freeze({
  setAllExchangeRateAsync() {
    return actionCreator(asyncTypes.GET_ALL_RATES_ASYNC)
  },
});
