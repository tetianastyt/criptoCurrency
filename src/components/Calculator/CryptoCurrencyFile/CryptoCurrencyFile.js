import React, { useCallback } from 'react';
import './CryptoCurrencyFile.css';
import { useDispatch } from 'react-redux';
import { actions } from '../../../engine/core/cryptocurrencies/actions';

function CryptoCurrencyFile(props) {
  const {name, usd, uah, rub} = props;

  const dispatch = useDispatch();
  const selectWidget = useCallback(() => {
    dispatch(actions.setSelectedCryptoWidget(name))
  }, [dispatch, name]);

  return (
    <div className="currency__card" onClick={selectWidget}>
      <div className="left">
        <img src={require(`../../../assets/images/${name.toUpperCase()}.png`)} alt={name}/>
        <p>{name.toUpperCase()}</p>
      </div>
      <div className="right">
        <ul>
          <li><b>USD:</b> {usd}</li>
          <li><b>UAH:</b> {uah}</li>
          <li><b>RUB:</b> {rub}</li>
        </ul>
      </div>
    </div>
  )
}

export default CryptoCurrencyFile;
