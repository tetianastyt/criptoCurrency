import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Calculator.css';
import Loader from '../../assets/images/Loading.gif';
import { asyncActions } from '../../engine/core/cryptocurrencies/saga/asyncActions';
import * as selectors from '../../engine/core/cryptocurrencies/selectors';
import CryptoCurrencyFile from './CryptoCurrencyFile/CryptoCurrencyFile';
import Input from './Input/Input';
import Select from './Select/Select';
import Result from './Result/Result';


function ForDoingCalculator() {
  const dispatch = useDispatch();
  const data = useSelector(selectors.allRatesSelector);
  const isLoading = useSelector(selectors.isLoadingSelector);

  useEffect(() => {
    dispatch(asyncActions.setAllExchangeRateAsync())
  }, [dispatch]);

  return (
    <>
      {isLoading
        ? <img src={Loader} alt="Loader" className="loader"/>
        : (
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
        )
      }
    </>
  );
}

function Calculator() {
  const selectedCryptoWidget = useSelector(selectors.selectedCryptoWidgetSelector);

  return (
    <div>
      <ForDoingCalculator/>
      <div className="selected_curr">
        Selected coin: <b> {selectedCryptoWidget.toUpperCase()}  </b>
      </div>
      <Input/>
      <Select/>
      <Result/>
    </div>
  )
}

export default Calculator;
