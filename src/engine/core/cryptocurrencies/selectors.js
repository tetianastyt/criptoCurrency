//import { createSelector } from "reselect";
export const allRatesSelector = state => state.cryptocurrencies.allRates;
export const selectedCryptoWidgetSelector = state => state.cryptocurrencies.selectedCryptoWidget;
export const selectedNatCurrSelector = state => state.cryptocurrencies.selectedNationalCurr;
export const volumeSelector = state => state.cryptocurrencies.volume;