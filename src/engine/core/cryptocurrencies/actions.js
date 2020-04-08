import * as types from "./types";
//import Api from '../../services/api/index';

/*export const setBTCexchangeRate = (data) => ({
    type: types.SET_BTC_EX_RATE,
    payload: data,
});
export const setETHexchangeRate = (data) => ({
    type: types.SET_ETH_EX_RATE,
    payload: data,
});
export const setXRPexchangeRate = (data) => ({
    type: types.SET_XRP_EX_RATE,
    payload: data,
});*/
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
})


/*export const getExchangeRates = () => {
    return (dispatch) => {
        let rates = [];
        Api.getBTCexchangeRate()
            .then((res) => {
                dispatch(setBTCexchangeRate(res.data));
                rates.push(res.data)
            })
            .catch((error) => {
                dispatch(setError(error))
            });
        Api.getETHexchangeRate()
            .then((res) => {
                dispatch(setETHexchangeRate(res.data));
                rates.push(res.data)
            })
            .catch((error) => {
                dispatch(setError(error))
            });
        Api.getXRPexchangeRate()
            .then((res) => {
                dispatch(setXRPexchangeRate(res.data));
                rates.push(res.data)
            })
            .catch((error) => {
                dispatch(setError(error))
            });
        dispatch(setAllExchangeRates(rates))
    }
};*/



