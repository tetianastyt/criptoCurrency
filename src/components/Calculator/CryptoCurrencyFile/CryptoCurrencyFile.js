import BTC from "../BTC.png";
import ETH from "../ETH.png";
import XRP from "../XRP.png";
import React from "react";
import './CryptoCurrencyFile.css'

function CryptoCurrencyFile (props) {
    const { name, usd, uah, rub } = props;
    return (
        <div className="currency__card">
            <div className="left">
                {name === "btc" ? <img src={BTC} alt="btc"></img> :
                name === "eth" ? <img src={ETH} alt="eth"></img> :
                <img src={XRP} alt="xrp"></img>}
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