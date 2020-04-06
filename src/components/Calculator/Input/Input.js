import React, {useEffect, useRef, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Input.css';
import {setVolume} from "../../../engine/core/cryptocurrencies/actions";
import {volumeSelector} from "../../../engine/core/cryptocurrencies/selectors";

function Input() {
    const textInput = useRef(null);
    const dispatch = useDispatch();
    const volume = useSelector(volumeSelector);

    const volumeOnChange = useCallback((ev) => {
        const value = ev.target.value;
        if (isFinite(value)) {
            dispatch(setVolume(value));
        } else {
            alert("A u sure you have input only numbers?");
            dispatch(setVolume(""))
        }
    }, [dispatch]);

    useEffect(() => {
        textInput.current.focus();
    }, []);

    return (
        <>
        Volume:
        <input
            className="styledInput"
            ref={textInput}
            value={volume}
            onChange={volumeOnChange}
            placeholder="1234567890"
        />
        </>
    );
}

export default Input;