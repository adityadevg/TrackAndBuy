const {GraphQLObjectType, GraphQLList} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Stock",
  fields: {
    "": {type: GraphQLList(date)}
  }
});
