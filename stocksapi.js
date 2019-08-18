const { RESTDataSource } = require('apollo-datasource-rest');

class StocksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.alphavantage.co/';
  }

  async getAStock (symbol) {
    try {
      const data = await this.get(`query?apikey=CSKWFJQ1NJ34XXTW&function=GLOBAL_QUOTE&symbol=${symbol}`, null, {
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