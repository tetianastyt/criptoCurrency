import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Calculator.css';
import { asyncActions } from "../../engine/core/cryptocurrencies/saga/asyncActions"
import CryptoCurrencyFile from "./CryptoCurrencyFile/CryptoCurrencyFile";
import Input from "./Input/Input";
import Select from "./Select/Select";
import {
    allRatesSelector,
    selectedCryptoWidgetSelector,
    selectedNatCurrSelector,
    volumeSelector,
    sumSelector
} from "../../engine/core/cryptocurrencies/selectors";

function useRates() {
    const dispatch = useDispatch();
    const allRates = useSelector(allRatesSelector);

    const getRequest = useCallback(()  => {
        dispatch(asyncActions.setAllExchangeRateAsync());
    }, [dispatch]);

    return {
        data: allRates,
        getRequest
    }
}

function ForDoingCalculator() {
    const { data, getRequest } = useRates();
    const selectedCryptoWidget = useSelector(selectedCryptoWidgetSelector);

    useEffect(() => {
       getRequest();
    }, [getRequest]);

    return (
        <div className="wrapper1">
            <div className="crypto_currency_cards">
                {(data.map(curr => (
                    <CryptoCurrencyFile
                    key={curr.currency}
                    name={curr.currency}
                    usd={curr.usd}
                    uah={curr.uah}
                    rub={curr.rub}
                     />
                )))}
            </div>
            <div className="selected_curr" >
                Selected coin: <b> {selectedCryptoWidget.toUpperCase()} </b>
            </div>
            <Input />
            <Select />
            <Result />
        </div>
    );
}

function Result() {
    const selectedNationalCurr = useSelector(selectedNatCurrSelector);
    const volume = useSelector(volumeSelector);
    const selectedCryptoWidget = useSelector(selectedCryptoWidgetSelector);
    const sum = useSelector(sumSelector);
    useEffect(() => {

    }, [volume, selectedNationalCurr, selectedNationalCurr]);

    return (
        <>
            <b>{volume} {selectedCryptoWidget.toUpperCase()} </b>
            will be <b>{sum}</b> in <b>{selectedNationalCurr.toUpperCase()}</b>
        </>
    )
}

function Calculator() {
    return (
        <div>
            <ForDoingCalculator />
        </div>
    );
}

export default Calculator;