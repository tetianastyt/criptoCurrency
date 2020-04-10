import React, {useCallback} from "react";
import BTC from "./BTC.png";
import ETH from "./ETH.png";
import XRP from "./XRP.png";
import './CryptoCurrencyFile.css'
import {useDispatch} from "react-redux"
import {setSelectedCryptoWidget} from "../../../engine/core/cryptocurrencies/actions";

function CryptoCurrencyFile (props) {
    const { name, usd, uah, rub } = props;

    const dispatch = useDispatch();
    const selectWidget = useCallback(()  => {
        dispatch(setSelectedCryptoWidget(name))
    }, [dispatch, name]);

    return (
        <div className="currency__card" onClick={selectWidget}>
            <div className="left">
                {name === "btc" ? <img src={BTC} alt="btc"/> :
                name === "eth" ? <img src={ETH} alt="eth"/> :
                <img src={XRP} alt="xrp"/>}
                <p>{name.toUpperCase()}</p>
            </div>
            <div className="right">
                <ul>
                    <li><b>USD:</b>  {usd}</li>
                    <li><b>UAH:</b>  {uah}</li>
                    <li><b>RUB:</b>  {rub}</li>
                </ul>
            </div>
        </div>
    )
}

export default CryptoCurrencyFile;