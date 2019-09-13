#!/bin/bash

# Install all required dependencies
# Nodejs
sudo apt install nodejs npm -y
# Ruby
sudo apt install ruby ruby-dev ruby-railties ruby-bundler -y

# nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
wget -O - https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash

# This loads nvm and bash_completion in variables
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Reload bash environment for nvm
source ~/.bashrc
source ~/.bash_profile

# Install npm dependencies for graphql_server
npm i --prefix ./graphql_server graphql apollo-server apollo-datasource-rest --save

# Install and Update Ruby Gems for client
gem install --install-dir client/ bundler graphql rails

# Install nokogiri, sqlite3
sudo apt install libxslt-dev libxml2-dev zlib1g-dev libsqlite3-dev -y
gem install --install-dir client/ nokogiri --source 'https://rubygems.org/'
gem install --install-dir client/ sqlite3 --source 'https://rubygems.org/'


# Update existing gems
gem update --install-dir client/

# Run bundler to install Ruby gems
bundle install
#bundle install --path client/
bundle update


# Request API Key from user
echo "Enter your AlphaVantage Key. You can find your key by going to
https://www.alphavantage.co/support/#api-key
Default Value (demo)"
read apikey
apikey=${apikey:-demo}
echo "module.exports = { apikey: '"$apikey"'};" > graphql_server/vars.env


# Execute the application
node graphql_server/server.js
