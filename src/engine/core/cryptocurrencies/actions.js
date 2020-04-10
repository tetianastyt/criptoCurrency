import * as types from "./types";

export const setAllExchangeRates = (data) => ({
    type: types.SET_ALL_EX_RATES,
    payload: data,
});
export const setError = (error) => ({
    type: types.SET_ERROR,
    payload: error,
});
export const setSelectedCryptoWidget = (name) => ({
    type: types.SET_SELECTED_CRYPTO_WIDGET,
    payload: name,
});
export const setSelectedNationalCurrency = (name) => ({
    type: types.SET_SELECTED_NATIONAL_CURR,
    payload: name,
});
export const setVolume = (value) => ({
    type: types.SET_VOLUME,
    payload: value,
});
export const setIsLoading = (bool) => ({
    type: types.SET_IS_LOADING,
    payload: bool,
});
