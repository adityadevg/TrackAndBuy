#!/bin/bash

# Install npm dependencies
npm i --prefix ./server graphql apollo-server apollo-datasource-rest --save

# Request API Key from user
echo "Enter your AlphaVantage Key. You can find your key by going to
https://www.alphavantage.co/support/#api-key
Default Value (demo)"
read apikey
apikey=${apikey:-demo}
echo "module.exports = { apikey: '"$apikey"'};" > server/vars.env

# Execute the application
node server/server.js