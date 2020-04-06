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
        <input
            className="styledInput"
            ref={textInput}
            onChange={volumeOnChange}
        />
    );
}

export default Input;