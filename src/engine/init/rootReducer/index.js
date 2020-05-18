import { combineReducers } from "redux";
import { cryptoReducer } from "../../core/cryptocurrencies/reducer";

const rootReducer = () => combineReducers({
  cryptocurrencies: cryptoReducer,
});

export {rootReducer};
