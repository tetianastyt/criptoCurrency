import * as types from "./types";
import { actionCreator } from '../../../helpers/actionCreator';

export const actions = Object.freeze({
  setAllExchangeRates(data) {
    return actionCreator(types.SET_ALL_EX_RATES, data)
  },
  setError(error) {
    return actionCreator(types.SET_ERROR, error)
  },
  setSelectedCryptoWidget(name) {
    return actionCreator(types.SET_SELECTED_CRYPTO_WIDGET, name)
  },
  setSelectedNationalCurrency(name) {
    return actionCreator(types.SET_SELECTED_NATIONAL_CURR, name)
  },
  setVolume(value) {
    return actionCreator(types.SET_VOLUME, value)
  },
  setIsLoading(bool) {
    return actionCreator(types.SET_IS_LOADING, bool)
  },
});
