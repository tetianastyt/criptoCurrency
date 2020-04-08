import React, {useCallback} from "react";
import BTC from "./BTC.png";
import ETH from "./ETH.png";
import XRP from "./XRP.png";
import './CryptoCurrencyFile.css'
import {useDispatch, useSelector} from "react-redux"
import {setSelectedCryptoWidget} from "../../../engine/core/cryptocurrencies/actions";
import * as selectors from "../../../engine/core/cryptocurrencies/selectors";

function CryptoCurrencyFile (props) {
    const { name, usd, uah, rub } = props;

    const dispatch = useDispatch();
    const selectWidget = useCallback(()  => {
        dispatch(setSelectedCryptoWidget(props.name))
    }, [dispatch, props.name]);

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
                    <li>USD:  {usd}</li>
                    <li>UAH:  {uah}</li>
                    <li>RUB:  {rub}</li>
                </ul>
            </div>
        </div>
    )
}

export default CryptoCurrencyFile;