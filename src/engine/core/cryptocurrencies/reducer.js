import { SET_BTC_EX_RATE, SET_ETH_EX_RATE,
    SET_XRP_EX_RATE, SET_ALL_EX_RATES } from './types';
import { SET_ERROR } from "./types";

const initialState = {
    allRates: [],
    BTCrates: {},
    ETHrates: {},
    XRPrates: {},
    error: null,
};

export function cryptoReducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case SET_BTC_EX_RATE: {
            return {
                ...state, //new state
                BTCrates: payload
            }
        }
        case SET_ETH_EX_RATE: {
            return {
                ...state, //new state
                ETHrates: payload
            }
        }
        case SET_XRP_EX_RATE: {
            return {
                ...state, //new state
                XRPrates: payload
            }
        }
        case SET_ALL_EX_RATES: {
            return {
                ...state,
                allRates: payload
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: payload
            }
        }
        default: {
            return state;
        }
    }
}
