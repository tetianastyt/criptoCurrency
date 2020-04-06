import { SET_BTC_EX_RATE, SET_ETH_EX_RATE,
    SET_XRP_EX_RATE, SET_ALL_EX_RATES} from "./types";
import { SET_ERROR } from "./types";
//import Api from '../../services/api/index';

export const setBTCexchangeRate = (data) => ({
    type: SET_BTC_EX_RATE,
    payload: data,
});
export const setETHexchangeRate = (data) => ({
    type: SET_ETH_EX_RATE,
    payload: data,
});
export const setXRPexchangeRate = (data) => ({
    type: SET_XRP_EX_RATE,
    payload: data,
});
export const setAllExchangeRates = (data) => ({
    type: SET_ALL_EX_RATES,
    payload: data,
});
export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
});

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



