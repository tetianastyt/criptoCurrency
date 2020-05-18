import * as types from './types';

const initialState = {
  allRates: [],
  error: null,
  isLoading: true,
  selectedCryptoWidget: 'btc',
  selectedNationalCurr: 'uah',
  volume: ''
};

export function cryptoReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
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
    case types.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: payload
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
