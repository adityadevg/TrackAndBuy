#!/bin/bash
npm i graphql apollo-server apollo-datasource-rest --save
echo "Enter your AlphaVantage Key by going to
https://www.alphavantage.co/support/#api-key
Default Value (demo)"
read $apikey
apikey=${VARIABLE:-demo}
echo "module.exports = { apikey: '"$apikey"'};" > vars.env
node index.js