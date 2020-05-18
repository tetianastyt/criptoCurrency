import React, { useLayoutEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Input.css';
import { actions } from '../../../engine/core/cryptocurrencies/actions';
import { volumeSelector } from '../../../engine/core/cryptocurrencies/selectors';

function Input() {
  const textInput = useRef(null);
  const dispatch = useDispatch();
  const volume = useSelector(volumeSelector);

  const volumeOnChange = useCallback((ev) => {
    const value = ev.target.value;
    dispatch(actions.setVolume(value));
  }, [dispatch]);

  useLayoutEffect(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
  }, []);

  return (
    <>
      Volume:
      <input
        type="number"
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
