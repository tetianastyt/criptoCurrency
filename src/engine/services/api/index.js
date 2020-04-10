import axios from 'axios';

class Api {
    constructor() {
        this.http = axios.create({ baseURL: 'https://api.kuna.io/v3/exchange-rates' });
        this.getExchangeRates = this.getExchangeRates.bind(this);
        /*this.getBTCexchangeRate = this.getBTCexchangeRate.bind(this);
        this.getETHexchangeRate = this.getETHexchangeRate.bind(this);
        this.getXRPexchangeRate = this.getXRPexchangeRate.bind(this);*/
    }

    static getInstance() {
        if (!Api.instance) {
            Api.instance = new Api();
        }
        return Api.instance;
    }
    getExchangeRates() {
        return this.http.get('/');
    }
    /*getBTCexchangeRate() {
        return this.http.get('/btc');
    }
    getETHexchangeRate() {
        return this.http.get('/eth')
    }
    getXRPexchangeRate() {
        return this.http.get('/xrp')
    }*/
}

export default Api.getInstance();
