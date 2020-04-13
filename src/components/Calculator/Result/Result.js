import React from 'react';
import {useSelector} from "react-redux";
import * as selectors from "../../../engine/core/cryptocurrencies/selectors";

function Result() {
    const selectedNationalCurr = useSelector(selectors.selectedNatCurrSelector);
    const volume = useSelector(selectors.volumeSelector);
    const selectedCryptoWidget = useSelector(selectors.selectedCryptoWidgetSelector);
    const sum = useSelector(selectors.sumSelector);

    return (
        <>
            <br />
            <b>{volume} {selectedCryptoWidget.toUpperCase()} </b>
            will be <b>{sum}</b> in <b>{selectedNationalCurr.toUpperCase()}</b>
        </>
    )
}

export default Result;
