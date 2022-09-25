#!/bin/bash
sudo apt update -y
sudo apt install --no-install-recommends gcc make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev -y
sudo apt install --no-install-recommends libsqlite3-dev wget curl llvm libncurses5-dev xz-utils tk-dev libxml2-dev -y
sudo apt install --no-install-recommends libxmlsec1-dev libffi-dev liblzma-dev bzip2 libreadline8 sqlite3 -y
sudo apt install --no-install-recommends python-tk python3-tk -y

git clone https://github.com/pyenv/pyenv.git "$HOME/.pyenv"
cd "$HOME/.pyenv" && src/configure && make -C src
TERMINAL_INIT_FILES=(".bashrc" ".bash_profile" ".bash_login" ".zshrc" ".zprofile" ".zlogin" ".profilerc")
PROJECT_DIR=$(dirname "$SCRIPT")

for file in "${TERMINAL_INIT_FILES[@]}"
do
    if [[ -f $HOME/${file} ]] ; then
      TERMINAL_INIT_FILE="$file"
      {
        export PYENV_ROOT=$HOME/.pyenv
        command -v pyenv >/dev/null || export PATH=$PYENV_ROOT/bin:$PATH
        eval "$(pyenv init -)"
      } >> "$HOME/$TERMINAL_INIT_FILE"
      echo -e "\npyenv path updated in $HOME/$TERMINAL_INIT_FILE\n"
      break
    fi
done

git clone https://github.com/pyenv/pyenv-update.git "$(pyenv root)/plugins/pyenv-update"
pyenv update
PYTHON_VERSION=$(cat "$PROJECT_DIR"/.python-version)
pyenv install "$PYTHON_VERSION"
cd "$PROJECT_DIR" && pyenv local "$PYTHON_VERSION"
xdg-open https://www.alphavantage.co/support/#api-key > /dev/null 2>&1
echo "Get your free AlphaVantage key"
echo "Enter your API Key: "
read -r api_key

cat << EOF >> "$HOME/$TERMINAL_INIT_FILE"
export FINANCE_ALPHAVANTAGE_API_KEY=$api_key
EOF
source "$HOME/$TERMINAL_INIT_FILE"
cd "$PROJECT_DIR" || echo "Unable to change to $PROJECT_DIR"
pyenv exec python -m pip install -r "$PROJECT_DIR"/requirements.txt
