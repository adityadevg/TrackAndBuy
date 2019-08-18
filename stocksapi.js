const { RESTDataSource } = require('apollo-datasource-rest');
const EnvVars = require('./vars.env');

class StocksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.alphavantage.co/';
  }

  async getAStock (symbol) {
    try {
      const data = await this.get(`query?apikey=${EnvVars.apikey}&function=GLOBAL_QUOTE&symbol=${symbol}`, null, {
        cacheOptions: {ttl: 60}
      })
      console.log(data['Global Quote']);
      data.stock = data['Global Quote']; 
      console.log("data: " + JSON.stringify(data));
      return data;
    } catch (error) {
      console.log("Error: " + error);
    }
  }
}
module.exports = StocksAPI;