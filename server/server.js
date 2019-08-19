const { ApolloServer, gql } = require('apollo-server');
const StocksAPI = require('./stocksapi.js');

const typeDefs = gql`
  type Stock {
    symbol: String!
    price: Float!
    open: Float!
    high: Float!
    low: Float!
    volume: Float!
    latest: String!
    previous: Float!
    change: Float!
    change_percent: String!
  }
  type Query {
    stock(symbol: String!): Stock
    stocks: [Stock!]!
  }
 `

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