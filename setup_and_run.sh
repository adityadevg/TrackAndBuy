#!/bin/bash


# Install all required dependencies
# Nodejs
sudo apt install nodejs npm
# Ruby
sudo apt install ruby

# nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash

# This loads nvm and bash_completion in variables
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Reload bash environment
source ~/.bashrc
source ~/.bash_profile

# npm
npm i --prefix ./server graphql apollo-server apollo-datasource-rest --save

# Install Ruby Gems for client
gem install --install-dir client/ graphql rails

# Request API Key from user
echo "Enter your AlphaVantage Key. You can find your key by going to
https://www.alphavantage.co/support/#api-key
Default Value (demo)"
read apikey
apikey=${apikey:-demo}
echo "module.exports = { apikey: '"$apikey"'};" > server/vars.env


# Execute the application
node server/server.js



