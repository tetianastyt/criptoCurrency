import { createSelector } from "reselect";
export const allRatesSelector = state => state.cryptocurrencies.allRates;
export const selectedCryptoWidgetSelector = state => state.cryptocurrencies.selectedCryptoWidget;
export const selectedNatCurrSelector = state => state.cryptocurrencies.selectedNationalCurr;
export const volumeSelector = state => state.cryptocurrencies.volume;


export const sumSelector = createSelector(
    allRatesSelector,
    selectedCryptoWidgetSelector,
    selectedNatCurrSelector,
    volumeSelector,
    (rates, crypto, national, volume) => {
        if (volume) {
            let obj = rates.filter(item => item.currency === crypto)[0];
            let price = obj[`${national}`];
            return price * volume
        }
    }
);

