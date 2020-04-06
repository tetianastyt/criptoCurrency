import React, {useEffect, useRef, useCallback} from 'react';
import {useDispatch} from "react-redux";
import './Input.css';
import {setVolume} from "../../../engine/core/cryptocurrencies/actions";

function Input() {
    const textInput = useRef(null);
    const dispatch = useDispatch();

    const volumeOnChange = useCallback((ev) => {
        const value = ev.target.value;
            dispatch(setVolume(value));
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
            onChange={volumeOnChange}
            placeholder="1234567890"
        />
        </>
    );
}

export default Input;