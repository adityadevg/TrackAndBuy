const { RESTDataSource } = require('apollo-datasource-rest');
const EnvVars = require('./vars.env');

class StocksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.alphavantage.co/';
  }

  parseGraphQLToJson(ip_data){
    var answer = {};
    for(var key in ip_data['Global Quote']){
      answer[key.substring(4).split(' ')[0]] = ip_data['Global Quote'][key];
    }
    //TODO: Find a better way to handle this!
    answer['change'] = ip_data['Global Quote']["09. change"];
    answer['change_percent'] = ip_data['Global Quote']["10. change percent"];
    console.log("Response: " + JSON.stringify(answer));
    return answer;
  }

  async getAStock (symbol) {
    try {
      const data = await this.get(`query?apikey=${EnvVars.apikey}&function=GLOBAL_QUOTE&symbol=${symbol}`, null, {
        cacheOptions: {ttl: 60}
      })
      var clean_data = this.parseGraphQLToJson(data);
      return clean_data;
    } catch (error) {
      console.log("Error: " + error);
    }
  }
}
module.exports = StocksAPI;