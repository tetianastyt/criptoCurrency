import axios from 'axios';

class Api {
  constructor() {
    this.http = axios.create({baseURL: 'https://api.kuna.io/v3/exchange-rates'});
    this.getExchangeRates = this.getExchangeRates.bind(this);
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
}

export default Api.getInstance();
