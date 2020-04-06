import * as asyncTypes from './asyncTYpes';

function actionCreator(actionType, actionPayload) {
    return {
        type: actionType,
        payload: actionPayload
    }
}

export const asyncActions = Object.freeze({
    setAllExchangeRateAsync() {
        return actionCreator(asyncTypes.GET_ALL_RATES_ASYNC)
    },
   /* setBTCexchangeRateAsync() {
        return actionCreator(GET_BTC_RATES_ASYNC)
    },
    setETHexchangeRateAsync() {
        return actionCreator(GET_ETH_RATES_ASYNC)
    },
    setXRPexchangeRateAsync() {
        return actionCreator(GET_XRP_RATES_ASYNC)
    }*/
});
