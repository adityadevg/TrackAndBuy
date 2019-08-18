const { ApolloServer, gql } = require('apollo-server');
const StocksAPI = require('./stocksapi.js');

const typeDefs = gql`
  type Stock {
    symbol: String
    price: Float
  }
  type Query {
    stock(symbol: String!): Stock!
    stocks: [Stock!]!
  }
 ` 
/*
    open: Float!
    high: Float!
    low: Float!volume: Float!
    latest: String!
    trading: String!
    day: String!
    previous: Float!
    close: Float!
    change: Float!
    percent: String!

*/

const resolvers = {
  Query: {
    stock: (root, { symbol }, { dataSources }) => dataSources.stocksAPI.getAStock(symbol),
  },
  Stock: {
    symbol: ({ symbol }) => symbol,
    price: ({ price }) => price,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
   return {
    stocksAPI: new StocksAPI()
   }
  }
 });

 // This `listen` method launches a web-server.  Existing apps
 // can utilize middleware options, which we'll discuss later.
 server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
 })