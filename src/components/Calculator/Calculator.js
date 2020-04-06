import React, {useEffect, useRef, useCallback} from 'react';
import { useSelector, useDispatch } from "react-redux";
import './Calculator.css';
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { asyncActions } from "../../engine/core/cryptocurrencies/saga/asyncActions"
import CryptoCurrencyFile from "./CryptoCurrencyFile/CryptoCurrencyFile";

function useRates() {
    const dispatch = useDispatch();
    const allRates = useSelector(state => state.cryptocurrencies.allRates);

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
    const textInput = useRef(null);
   useEffect(() => {
       getRequest();
       textInput.current.focus();
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
            <div className="selected_curr">
                Selected coin: BTN
            </div>
            <div>
                <b>Volume:</b>
                <input className="styledInput" ref={textInput}/>
            </div>
            <div className="national_currs">
                <ToggleButtonGroup type="radio" name="currency" className="buttons_group" /*value={value} onChange={handleChange}*/>
                    <ToggleButton name="USD" value="USD" className="btn">USD</ToggleButton>
                    <ToggleButton name="UAH" value="UAH" className="btn">UAH</ToggleButton>
                    <ToggleButton name="RUR" value="RUB" className="btn">RUB</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <b>VOLUME SELECTED COIN</b> will be <b>SUM</b> in <b>NAT CURR</b>
        </div>
    );
}

function Calculator() {
    return (
        <div>
            <ForDoingCalculator />
        </div>
    );
}

export default Calculator;