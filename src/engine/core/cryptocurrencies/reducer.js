import * as types from './types';

const initialState = {
    allRates: [],
    /*BTCrates: {},
    ETHrates: {},
    XRPrates: {},*/
    error: null,
    selectedCryptoWidget: "btc",
    selectedNationalCurr: "usd",
    volume: ''
};

export function cryptoReducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        /*case types.SET_BTC_EX_RATE: {
            return {
                ...state, //new state
                BTCrates: payload
            }
        }
        case types.SET_ETH_EX_RATE: {
            return {
                ...state, //new state
                ETHrates: payload
            }
        }
        case types.SET_XRP_EX_RATE: {
            return {
                ...state, //new state
                XRPrates: payload
            }
        }*/
        case types.SET_ALL_EX_RATES: {
            return {
                ...state,
                allRates: payload
            }
        }
        case types.SET_ERROR: {
            return {
                ...state,
                error: payload
            }
        }
        case types.SET_SELECTED_CRYPTO_WIDGET: {
            return {
                ...state,
                selectedCryptoWidget: payload
            }
        }
        case types.SET_SELECTED_NATIONAL_CURR: {
            return {
                ...state,
                selectedNationalCurr: payload
            }
        }
        case types.SET_VOLUME: {
            return {
                ...state,
                volume: payload
            }
        }
        default: {
            return state;
        }
    }
}
